# `azurerm_netapp_volume`

Refer to the Terraform Registory for docs: [`azurerm_netapp_volume`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume).

# `netappVolume` Submodule <a name="`netappVolume` Submodule" id="@cdktf/provider-azurerm.netappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolume <a name="NetappVolume" id="@cdktf/provider-azurerm.netappVolume.NetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume azurerm_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_volume.NetappVolume;

NetappVolume.Builder.create(Construct scope, java.lang.String id)
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
    .accountName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .poolName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serviceLevel(java.lang.String)
    .storageQuotaInGb(java.lang.Number)
    .subnetId(java.lang.String)
    .volumePath(java.lang.String)
//  .azureVmwareDataStoreEnabled(java.lang.Boolean)
//  .azureVmwareDataStoreEnabled(IResolvable)
//  .createFromSnapshotResourceId(java.lang.String)
//  .dataProtectionReplication(NetappVolumeDataProtectionReplication)
//  .dataProtectionSnapshotPolicy(NetappVolumeDataProtectionSnapshotPolicy)
//  .exportPolicyRule(IResolvable)
//  .exportPolicyRule(java.util.List<NetappVolumeExportPolicyRule>)
//  .id(java.lang.String)
//  .networkFeatures(java.lang.String)
//  .protocols(java.util.List<java.lang.String>)
//  .securityStyle(java.lang.String)
//  .snapshotDirectoryVisible(java.lang.Boolean)
//  .snapshotDirectoryVisible(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .throughputInMibps(java.lang.Number)
//  .timeouts(NetappVolumeTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#location NetappVolume#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#name NetappVolume#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.poolName">poolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.serviceLevel">serviceLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.storageQuotaInGb">storageQuotaInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.volumePath">volumePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.azureVmwareDataStoreEnabled">azureVmwareDataStoreEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.createFromSnapshotResourceId">createFromSnapshotResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dataProtectionReplication">dataProtectionReplication</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | data_protection_replication block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dataProtectionSnapshotPolicy">dataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | data_protection_snapshot_policy block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.exportPolicyRule">exportPolicyRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>></code> | export_policy_rule block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#id NetappVolume#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.networkFeatures">networkFeatures</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.securityStyle">securityStyle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.snapshotDirectoryVisible">snapshotDirectoryVisible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#tags NetappVolume#tags}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.throughputInMibps">throughputInMibps</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#zone NetappVolume#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.accountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#location NetappVolume#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#name NetappVolume#name}.

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.poolName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}.

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.serviceLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}.

---

##### `storageQuotaInGb`<sup>Required</sup> <a name="storageQuotaInGb" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.storageQuotaInGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}.

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.volumePath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}.

---

##### `azureVmwareDataStoreEnabled`<sup>Optional</sup> <a name="azureVmwareDataStoreEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.azureVmwareDataStoreEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}.

---

##### `createFromSnapshotResourceId`<sup>Optional</sup> <a name="createFromSnapshotResourceId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.createFromSnapshotResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}.

---

##### `dataProtectionReplication`<sup>Optional</sup> <a name="dataProtectionReplication" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dataProtectionReplication"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

data_protection_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#data_protection_replication NetappVolume#data_protection_replication}

---

##### `dataProtectionSnapshotPolicy`<sup>Optional</sup> <a name="dataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dataProtectionSnapshotPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

data_protection_snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#data_protection_snapshot_policy NetappVolume#data_protection_snapshot_policy}

---

##### `exportPolicyRule`<sup>Optional</sup> <a name="exportPolicyRule" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.exportPolicyRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>>

export_policy_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#export_policy_rule NetappVolume#export_policy_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#id NetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkFeatures`<sup>Optional</sup> <a name="networkFeatures" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.networkFeatures"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.protocols"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}.

---

##### `securityStyle`<sup>Optional</sup> <a name="securityStyle" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.securityStyle"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}.

---

##### `snapshotDirectoryVisible`<sup>Optional</sup> <a name="snapshotDirectoryVisible" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.snapshotDirectoryVisible"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#tags NetappVolume#tags}.

---

##### `throughputInMibps`<sup>Optional</sup> <a name="throughputInMibps" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.throughputInMibps"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#zone NetappVolume#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication">putDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy">putDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule">putExportPolicyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetAzureVmwareDataStoreEnabled">resetAzureVmwareDataStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetCreateFromSnapshotResourceId">resetCreateFromSnapshotResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionReplication">resetDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionSnapshotPolicy">resetDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetExportPolicyRule">resetExportPolicyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetNetworkFeatures">resetNetworkFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSecurityStyle">resetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSnapshotDirectoryVisible">resetSnapshotDirectoryVisible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetThroughputInMibps">resetThroughputInMibps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDataProtectionReplication` <a name="putDataProtectionReplication" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication"></a>

```java
public void putDataProtectionReplication(NetappVolumeDataProtectionReplication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---

##### `putDataProtectionSnapshotPolicy` <a name="putDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy"></a>

```java
public void putDataProtectionSnapshotPolicy(NetappVolumeDataProtectionSnapshotPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---

##### `putExportPolicyRule` <a name="putExportPolicyRule" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule"></a>

```java
public void putExportPolicyRule(IResolvable OR java.util.List<NetappVolumeExportPolicyRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putTimeouts"></a>

```java
public void putTimeouts(NetappVolumeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---

##### `resetAzureVmwareDataStoreEnabled` <a name="resetAzureVmwareDataStoreEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetAzureVmwareDataStoreEnabled"></a>

```java
public void resetAzureVmwareDataStoreEnabled()
```

##### `resetCreateFromSnapshotResourceId` <a name="resetCreateFromSnapshotResourceId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetCreateFromSnapshotResourceId"></a>

```java
public void resetCreateFromSnapshotResourceId()
```

##### `resetDataProtectionReplication` <a name="resetDataProtectionReplication" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionReplication"></a>

```java
public void resetDataProtectionReplication()
```

##### `resetDataProtectionSnapshotPolicy` <a name="resetDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionSnapshotPolicy"></a>

```java
public void resetDataProtectionSnapshotPolicy()
```

##### `resetExportPolicyRule` <a name="resetExportPolicyRule" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetExportPolicyRule"></a>

```java
public void resetExportPolicyRule()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkFeatures` <a name="resetNetworkFeatures" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetNetworkFeatures"></a>

```java
public void resetNetworkFeatures()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetSecurityStyle` <a name="resetSecurityStyle" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSecurityStyle"></a>

```java
public void resetSecurityStyle()
```

##### `resetSnapshotDirectoryVisible` <a name="resetSnapshotDirectoryVisible" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetSnapshotDirectoryVisible"></a>

```java
public void resetSnapshotDirectoryVisible()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetTags"></a>

```java
public void resetTags()
```

##### `resetThroughputInMibps` <a name="resetThroughputInMibps" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetThroughputInMibps"></a>

```java
public void resetThroughputInMibps()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_volume.NetappVolume;

NetappVolume.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_volume.NetappVolume;

NetappVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_volume.NetappVolume;

NetappVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplication">dataProtectionReplication</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference">NetappVolumeDataProtectionReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicy">dataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeDataProtectionSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRule">exportPolicyRule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList">NetappVolumeExportPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.mountIpAddresses">mountIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabledInput">azureVmwareDataStoreEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceIdInput">createFromSnapshotResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplicationInput">dataProtectionReplicationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicyInput">dataProtectionSnapshotPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRuleInput">exportPolicyRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.networkFeaturesInput">networkFeaturesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.poolNameInput">poolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.securityStyleInput">securityStyleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.serviceLevelInput">serviceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisibleInput">snapshotDirectoryVisibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGbInput">storageQuotaInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibpsInput">throughputInMibpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.volumePathInput">volumePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabled">azureVmwareDataStoreEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceId">createFromSnapshotResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.networkFeatures">networkFeatures</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.poolName">poolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.securityStyle">securityStyle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.serviceLevel">serviceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisible">snapshotDirectoryVisible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGb">storageQuotaInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibps">throughputInMibps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.volumePath">volumePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataProtectionReplication`<sup>Required</sup> <a name="dataProtectionReplication" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplication"></a>

```java
public NetappVolumeDataProtectionReplicationOutputReference getDataProtectionReplication();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference">NetappVolumeDataProtectionReplicationOutputReference</a>

---

##### `dataProtectionSnapshotPolicy`<sup>Required</sup> <a name="dataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicy"></a>

```java
public NetappVolumeDataProtectionSnapshotPolicyOutputReference getDataProtectionSnapshotPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeDataProtectionSnapshotPolicyOutputReference</a>

---

##### `exportPolicyRule`<sup>Required</sup> <a name="exportPolicyRule" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRule"></a>

```java
public NetappVolumeExportPolicyRuleList getExportPolicyRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList">NetappVolumeExportPolicyRuleList</a>

---

##### `mountIpAddresses`<sup>Required</sup> <a name="mountIpAddresses" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.mountIpAddresses"></a>

```java
public java.util.List<java.lang.String> getMountIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.timeouts"></a>

```java
public NetappVolumeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `azureVmwareDataStoreEnabledInput`<sup>Optional</sup> <a name="azureVmwareDataStoreEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabledInput"></a>

```java
public java.lang.Object getAzureVmwareDataStoreEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createFromSnapshotResourceIdInput`<sup>Optional</sup> <a name="createFromSnapshotResourceIdInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceIdInput"></a>

```java
public java.lang.String getCreateFromSnapshotResourceIdInput();
```

- *Type:* java.lang.String

---

##### `dataProtectionReplicationInput`<sup>Optional</sup> <a name="dataProtectionReplicationInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplicationInput"></a>

```java
public NetappVolumeDataProtectionReplication getDataProtectionReplicationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---

##### `dataProtectionSnapshotPolicyInput`<sup>Optional</sup> <a name="dataProtectionSnapshotPolicyInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicyInput"></a>

```java
public NetappVolumeDataProtectionSnapshotPolicy getDataProtectionSnapshotPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---

##### `exportPolicyRuleInput`<sup>Optional</sup> <a name="exportPolicyRuleInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRuleInput"></a>

```java
public java.lang.Object getExportPolicyRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkFeaturesInput`<sup>Optional</sup> <a name="networkFeaturesInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.networkFeaturesInput"></a>

```java
public java.lang.String getNetworkFeaturesInput();
```

- *Type:* java.lang.String

---

##### `poolNameInput`<sup>Optional</sup> <a name="poolNameInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.poolNameInput"></a>

```java
public java.lang.String getPoolNameInput();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `securityStyleInput`<sup>Optional</sup> <a name="securityStyleInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.securityStyleInput"></a>

```java
public java.lang.String getSecurityStyleInput();
```

- *Type:* java.lang.String

---

##### `serviceLevelInput`<sup>Optional</sup> <a name="serviceLevelInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.serviceLevelInput"></a>

```java
public java.lang.String getServiceLevelInput();
```

- *Type:* java.lang.String

---

##### `snapshotDirectoryVisibleInput`<sup>Optional</sup> <a name="snapshotDirectoryVisibleInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisibleInput"></a>

```java
public java.lang.Object getSnapshotDirectoryVisibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageQuotaInGbInput`<sup>Optional</sup> <a name="storageQuotaInGbInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGbInput"></a>

```java
public java.lang.Number getStorageQuotaInGbInput();
```

- *Type:* java.lang.Number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughputInMibpsInput`<sup>Optional</sup> <a name="throughputInMibpsInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibpsInput"></a>

```java
public java.lang.Number getThroughputInMibpsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `volumePathInput`<sup>Optional</sup> <a name="volumePathInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.volumePathInput"></a>

```java
public java.lang.String getVolumePathInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `azureVmwareDataStoreEnabled`<sup>Required</sup> <a name="azureVmwareDataStoreEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabled"></a>

```java
public java.lang.Object getAzureVmwareDataStoreEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createFromSnapshotResourceId`<sup>Required</sup> <a name="createFromSnapshotResourceId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceId"></a>

```java
public java.lang.String getCreateFromSnapshotResourceId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkFeatures`<sup>Required</sup> <a name="networkFeatures" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.networkFeatures"></a>

```java
public java.lang.String getNetworkFeatures();
```

- *Type:* java.lang.String

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.poolName"></a>

```java
public java.lang.String getPoolName();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `securityStyle`<sup>Required</sup> <a name="securityStyle" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.securityStyle"></a>

```java
public java.lang.String getSecurityStyle();
```

- *Type:* java.lang.String

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.serviceLevel"></a>

```java
public java.lang.String getServiceLevel();
```

- *Type:* java.lang.String

---

##### `snapshotDirectoryVisible`<sup>Required</sup> <a name="snapshotDirectoryVisible" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisible"></a>

```java
public java.lang.Object getSnapshotDirectoryVisible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageQuotaInGb`<sup>Required</sup> <a name="storageQuotaInGb" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGb"></a>

```java
public java.lang.Number getStorageQuotaInGb();
```

- *Type:* java.lang.Number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughputInMibps`<sup>Required</sup> <a name="throughputInMibps" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibps"></a>

```java
public java.lang.Number getThroughputInMibps();
```

- *Type:* java.lang.Number

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.volumePath"></a>

```java
public java.lang.String getVolumePath();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.netappVolume.NetappVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeConfig <a name="NetappVolumeConfig" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_volume.NetappVolumeConfig;

NetappVolumeConfig.builder()
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
    .accountName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .poolName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serviceLevel(java.lang.String)
    .storageQuotaInGb(java.lang.Number)
    .subnetId(java.lang.String)
    .volumePath(java.lang.String)
//  .azureVmwareDataStoreEnabled(java.lang.Boolean)
//  .azureVmwareDataStoreEnabled(IResolvable)
//  .createFromSnapshotResourceId(java.lang.String)
//  .dataProtectionReplication(NetappVolumeDataProtectionReplication)
//  .dataProtectionSnapshotPolicy(NetappVolumeDataProtectionSnapshotPolicy)
//  .exportPolicyRule(IResolvable)
//  .exportPolicyRule(java.util.List<NetappVolumeExportPolicyRule>)
//  .id(java.lang.String)
//  .networkFeatures(java.lang.String)
//  .protocols(java.util.List<java.lang.String>)
//  .securityStyle(java.lang.String)
//  .snapshotDirectoryVisible(java.lang.Boolean)
//  .snapshotDirectoryVisible(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .throughputInMibps(java.lang.Number)
//  .timeouts(NetappVolumeTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#location NetappVolume#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#name NetappVolume#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.poolName">poolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.serviceLevel">serviceLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.storageQuotaInGb">storageQuotaInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.volumePath">volumePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.azureVmwareDataStoreEnabled">azureVmwareDataStoreEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.createFromSnapshotResourceId">createFromSnapshotResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionReplication">dataProtectionReplication</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | data_protection_replication block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionSnapshotPolicy">dataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | data_protection_snapshot_policy block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.exportPolicyRule">exportPolicyRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>></code> | export_policy_rule block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#id NetappVolume#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.networkFeatures">networkFeatures</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.securityStyle">securityStyle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.snapshotDirectoryVisible">snapshotDirectoryVisible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#tags NetappVolume#tags}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.throughputInMibps">throughputInMibps</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#zone NetappVolume#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#location NetappVolume#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#name NetappVolume#name}.

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.poolName"></a>

```java
public java.lang.String getPoolName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}.

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.serviceLevel"></a>

```java
public java.lang.String getServiceLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}.

---

##### `storageQuotaInGb`<sup>Required</sup> <a name="storageQuotaInGb" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.storageQuotaInGb"></a>

```java
public java.lang.Number getStorageQuotaInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}.

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.volumePath"></a>

```java
public java.lang.String getVolumePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}.

---

##### `azureVmwareDataStoreEnabled`<sup>Optional</sup> <a name="azureVmwareDataStoreEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.azureVmwareDataStoreEnabled"></a>

```java
public java.lang.Object getAzureVmwareDataStoreEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}.

---

##### `createFromSnapshotResourceId`<sup>Optional</sup> <a name="createFromSnapshotResourceId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.createFromSnapshotResourceId"></a>

```java
public java.lang.String getCreateFromSnapshotResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}.

---

##### `dataProtectionReplication`<sup>Optional</sup> <a name="dataProtectionReplication" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionReplication"></a>

```java
public NetappVolumeDataProtectionReplication getDataProtectionReplication();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

data_protection_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#data_protection_replication NetappVolume#data_protection_replication}

---

##### `dataProtectionSnapshotPolicy`<sup>Optional</sup> <a name="dataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionSnapshotPolicy"></a>

```java
public NetappVolumeDataProtectionSnapshotPolicy getDataProtectionSnapshotPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

data_protection_snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#data_protection_snapshot_policy NetappVolume#data_protection_snapshot_policy}

---

##### `exportPolicyRule`<sup>Optional</sup> <a name="exportPolicyRule" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.exportPolicyRule"></a>

```java
public java.lang.Object getExportPolicyRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>>

export_policy_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#export_policy_rule NetappVolume#export_policy_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#id NetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkFeatures`<sup>Optional</sup> <a name="networkFeatures" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.networkFeatures"></a>

```java
public java.lang.String getNetworkFeatures();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}.

---

##### `securityStyle`<sup>Optional</sup> <a name="securityStyle" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.securityStyle"></a>

```java
public java.lang.String getSecurityStyle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}.

---

##### `snapshotDirectoryVisible`<sup>Optional</sup> <a name="snapshotDirectoryVisible" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.snapshotDirectoryVisible"></a>

```java
public java.lang.Object getSnapshotDirectoryVisible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#tags NetappVolume#tags}.

---

##### `throughputInMibps`<sup>Optional</sup> <a name="throughputInMibps" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.throughputInMibps"></a>

```java
public java.lang.Number getThroughputInMibps();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.timeouts"></a>

```java
public NetappVolumeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#zone NetappVolume#zone}.

---

### NetappVolumeDataProtectionReplication <a name="NetappVolumeDataProtectionReplication" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_volume.NetappVolumeDataProtectionReplication;

NetappVolumeDataProtectionReplication.builder()
    .remoteVolumeLocation(java.lang.String)
    .remoteVolumeResourceId(java.lang.String)
    .replicationFrequency(java.lang.String)
//  .endpointType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeLocation">remoteVolumeLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#remote_volume_location NetappVolume#remote_volume_location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeResourceId">remoteVolumeResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#remote_volume_resource_id NetappVolume#remote_volume_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.replicationFrequency">replicationFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#replication_frequency NetappVolume#replication_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#endpoint_type NetappVolume#endpoint_type}. |

---

##### `remoteVolumeLocation`<sup>Required</sup> <a name="remoteVolumeLocation" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeLocation"></a>

```java
public java.lang.String getRemoteVolumeLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#remote_volume_location NetappVolume#remote_volume_location}.

---

##### `remoteVolumeResourceId`<sup>Required</sup> <a name="remoteVolumeResourceId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeResourceId"></a>

```java
public java.lang.String getRemoteVolumeResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#remote_volume_resource_id NetappVolume#remote_volume_resource_id}.

---

##### `replicationFrequency`<sup>Required</sup> <a name="replicationFrequency" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.replicationFrequency"></a>

```java
public java.lang.String getReplicationFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#replication_frequency NetappVolume#replication_frequency}.

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#endpoint_type NetappVolume#endpoint_type}.

---

### NetappVolumeDataProtectionSnapshotPolicy <a name="NetappVolumeDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_volume.NetappVolumeDataProtectionSnapshotPolicy;

NetappVolumeDataProtectionSnapshotPolicy.builder()
    .snapshotPolicyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId">snapshotPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#snapshot_policy_id NetappVolume#snapshot_policy_id}. |

---

##### `snapshotPolicyId`<sup>Required</sup> <a name="snapshotPolicyId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId"></a>

```java
public java.lang.String getSnapshotPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#snapshot_policy_id NetappVolume#snapshot_policy_id}.

---

### NetappVolumeExportPolicyRule <a name="NetappVolumeExportPolicyRule" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_volume.NetappVolumeExportPolicyRule;

NetappVolumeExportPolicyRule.builder()
    .allowedClients(java.util.List<java.lang.String>)
    .ruleIndex(java.lang.Number)
//  .protocolsEnabled(java.util.List<java.lang.String>)
//  .rootAccessEnabled(java.lang.Boolean)
//  .rootAccessEnabled(IResolvable)
//  .unixReadOnly(java.lang.Boolean)
//  .unixReadOnly(IResolvable)
//  .unixReadWrite(java.lang.Boolean)
//  .unixReadWrite(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.allowedClients">allowedClients</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.ruleIndex">ruleIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#rule_index NetappVolume#rule_index}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.protocolsEnabled">protocolsEnabled</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#protocols_enabled NetappVolume#protocols_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.rootAccessEnabled">rootAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#root_access_enabled NetappVolume#root_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadOnly">unixReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#unix_read_only NetappVolume#unix_read_only}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadWrite">unixReadWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#unix_read_write NetappVolume#unix_read_write}. |

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.allowedClients"></a>

```java
public java.util.List<java.lang.String> getAllowedClients();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}.

---

##### `ruleIndex`<sup>Required</sup> <a name="ruleIndex" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.ruleIndex"></a>

```java
public java.lang.Number getRuleIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#rule_index NetappVolume#rule_index}.

---

##### `protocolsEnabled`<sup>Optional</sup> <a name="protocolsEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.protocolsEnabled"></a>

```java
public java.util.List<java.lang.String> getProtocolsEnabled();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#protocols_enabled NetappVolume#protocols_enabled}.

---

##### `rootAccessEnabled`<sup>Optional</sup> <a name="rootAccessEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.rootAccessEnabled"></a>

```java
public java.lang.Object getRootAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#root_access_enabled NetappVolume#root_access_enabled}.

---

##### `unixReadOnly`<sup>Optional</sup> <a name="unixReadOnly" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadOnly"></a>

```java
public java.lang.Object getUnixReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#unix_read_only NetappVolume#unix_read_only}.

---

##### `unixReadWrite`<sup>Optional</sup> <a name="unixReadWrite" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadWrite"></a>

```java
public java.lang.Object getUnixReadWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#unix_read_write NetappVolume#unix_read_write}.

---

### NetappVolumeTimeouts <a name="NetappVolumeTimeouts" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_volume.NetappVolumeTimeouts;

NetappVolumeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#create NetappVolume#create}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#delete NetappVolume#delete}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#read NetappVolume#read}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#update NetappVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#create NetappVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#delete NetappVolume#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#read NetappVolume#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/netapp_volume#update NetappVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeDataProtectionReplicationOutputReference <a name="NetappVolumeDataProtectionReplicationOutputReference" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_volume.NetappVolumeDataProtectionReplicationOutputReference;

new NetappVolumeDataProtectionReplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resetEndpointType">resetEndpointType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointType` <a name="resetEndpointType" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resetEndpointType"></a>

```java
public void resetEndpointType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput">remoteVolumeLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput">remoteVolumeResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput">replicationFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation">remoteVolumeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId">remoteVolumeResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequency">replicationFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `remoteVolumeLocationInput`<sup>Optional</sup> <a name="remoteVolumeLocationInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput"></a>

```java
public java.lang.String getRemoteVolumeLocationInput();
```

- *Type:* java.lang.String

---

##### `remoteVolumeResourceIdInput`<sup>Optional</sup> <a name="remoteVolumeResourceIdInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput"></a>

```java
public java.lang.String getRemoteVolumeResourceIdInput();
```

- *Type:* java.lang.String

---

##### `replicationFrequencyInput`<sup>Optional</sup> <a name="replicationFrequencyInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput"></a>

```java
public java.lang.String getReplicationFrequencyInput();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `remoteVolumeLocation`<sup>Required</sup> <a name="remoteVolumeLocation" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation"></a>

```java
public java.lang.String getRemoteVolumeLocation();
```

- *Type:* java.lang.String

---

##### `remoteVolumeResourceId`<sup>Required</sup> <a name="remoteVolumeResourceId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId"></a>

```java
public java.lang.String getRemoteVolumeResourceId();
```

- *Type:* java.lang.String

---

##### `replicationFrequency`<sup>Required</sup> <a name="replicationFrequency" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequency"></a>

```java
public java.lang.String getReplicationFrequency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.internalValue"></a>

```java
public NetappVolumeDataProtectionReplication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---


### NetappVolumeDataProtectionSnapshotPolicyOutputReference <a name="NetappVolumeDataProtectionSnapshotPolicyOutputReference" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_volume.NetappVolumeDataProtectionSnapshotPolicyOutputReference;

new NetappVolumeDataProtectionSnapshotPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput">snapshotPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId">snapshotPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `snapshotPolicyIdInput`<sup>Optional</sup> <a name="snapshotPolicyIdInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput"></a>

```java
public java.lang.String getSnapshotPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotPolicyId`<sup>Required</sup> <a name="snapshotPolicyId" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId"></a>

```java
public java.lang.String getSnapshotPolicyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue"></a>

```java
public NetappVolumeDataProtectionSnapshotPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---


### NetappVolumeExportPolicyRuleList <a name="NetappVolumeExportPolicyRuleList" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_volume.NetappVolumeExportPolicyRuleList;

new NetappVolumeExportPolicyRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get"></a>

```java
public NetappVolumeExportPolicyRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>>

---


### NetappVolumeExportPolicyRuleOutputReference <a name="NetappVolumeExportPolicyRuleOutputReference" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_volume.NetappVolumeExportPolicyRuleOutputReference;

new NetappVolumeExportPolicyRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetProtocolsEnabled">resetProtocolsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled">resetRootAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadOnly">resetUnixReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadWrite">resetUnixReadWrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProtocolsEnabled` <a name="resetProtocolsEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetProtocolsEnabled"></a>

```java
public void resetProtocolsEnabled()
```

##### `resetRootAccessEnabled` <a name="resetRootAccessEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled"></a>

```java
public void resetRootAccessEnabled()
```

##### `resetUnixReadOnly` <a name="resetUnixReadOnly" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadOnly"></a>

```java
public void resetUnixReadOnly()
```

##### `resetUnixReadWrite` <a name="resetUnixReadWrite" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadWrite"></a>

```java
public void resetUnixReadWrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClientsInput">allowedClientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolsEnabledInput">protocolsEnabledInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput">rootAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndexInput">ruleIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput">unixReadOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput">unixReadWriteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClients">allowedClients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolsEnabled">protocolsEnabled</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled">rootAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndex">ruleIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnly">unixReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWrite">unixReadWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedClientsInput`<sup>Optional</sup> <a name="allowedClientsInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClientsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedClientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolsEnabledInput`<sup>Optional</sup> <a name="protocolsEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolsEnabledInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsEnabledInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rootAccessEnabledInput`<sup>Optional</sup> <a name="rootAccessEnabledInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput"></a>

```java
public java.lang.Object getRootAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ruleIndexInput`<sup>Optional</sup> <a name="ruleIndexInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndexInput"></a>

```java
public java.lang.Number getRuleIndexInput();
```

- *Type:* java.lang.Number

---

##### `unixReadOnlyInput`<sup>Optional</sup> <a name="unixReadOnlyInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput"></a>

```java
public java.lang.Object getUnixReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unixReadWriteInput`<sup>Optional</sup> <a name="unixReadWriteInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput"></a>

```java
public java.lang.Object getUnixReadWriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClients"></a>

```java
public java.util.List<java.lang.String> getAllowedClients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolsEnabled`<sup>Required</sup> <a name="protocolsEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolsEnabled"></a>

```java
public java.util.List<java.lang.String> getProtocolsEnabled();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rootAccessEnabled`<sup>Required</sup> <a name="rootAccessEnabled" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled"></a>

```java
public java.lang.Object getRootAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ruleIndex`<sup>Required</sup> <a name="ruleIndex" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndex"></a>

```java
public java.lang.Number getRuleIndex();
```

- *Type:* java.lang.Number

---

##### `unixReadOnly`<sup>Required</sup> <a name="unixReadOnly" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnly"></a>

```java
public java.lang.Object getUnixReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unixReadWrite`<sup>Required</sup> <a name="unixReadWrite" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWrite"></a>

```java
public java.lang.Object getUnixReadWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a> OR com.hashicorp.cdktf.IResolvable

---


### NetappVolumeTimeoutsOutputReference <a name="NetappVolumeTimeoutsOutputReference" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_volume.NetappVolumeTimeoutsOutputReference;

new NetappVolumeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



