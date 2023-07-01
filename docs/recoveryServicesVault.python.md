# `azurerm_recovery_services_vault`

Refer to the Terraform Registory for docs: [`azurerm_recovery_services_vault`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault).

# `recoveryServicesVault` Submodule <a name="`recoveryServicesVault` Submodule" id="@cdktf/provider-azurerm.recoveryServicesVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecoveryServicesVault <a name="RecoveryServicesVault" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault azurerm_recovery_services_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import recovery_services_vault

recoveryServicesVault.RecoveryServicesVault(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  sku: str,
  classic_vmware_replication_enabled: typing.Union[bool, IResolvable] = None,
  cross_region_restore_enabled: typing.Union[bool, IResolvable] = None,
  encryption: RecoveryServicesVaultEncryption = None,
  id: str = None,
  identity: RecoveryServicesVaultIdentity = None,
  immutability: str = None,
  monitoring: RecoveryServicesVaultMonitoring = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  soft_delete_enabled: typing.Union[bool, IResolvable] = None,
  storage_mode_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: RecoveryServicesVaultTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#location RecoveryServicesVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#name RecoveryServicesVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#resource_group_name RecoveryServicesVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#sku RecoveryServicesVault#sku}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.classicVmwareReplicationEnabled">classic_vmware_replication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#classic_vmware_replication_enabled RecoveryServicesVault#classic_vmware_replication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.crossRegionRestoreEnabled">cross_region_restore_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#cross_region_restore_enabled RecoveryServicesVault#cross_region_restore_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#id RecoveryServicesVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.immutability">immutability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#immutability RecoveryServicesVault#immutability}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#public_network_access_enabled RecoveryServicesVault#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.softDeleteEnabled">soft_delete_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#soft_delete_enabled RecoveryServicesVault#soft_delete_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.storageModeType">storage_mode_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#storage_mode_type RecoveryServicesVault#storage_mode_type}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#tags RecoveryServicesVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#location RecoveryServicesVault#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#name RecoveryServicesVault#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#resource_group_name RecoveryServicesVault#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#sku RecoveryServicesVault#sku}.

---

##### `classic_vmware_replication_enabled`<sup>Optional</sup> <a name="classic_vmware_replication_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.classicVmwareReplicationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#classic_vmware_replication_enabled RecoveryServicesVault#classic_vmware_replication_enabled}.

---

##### `cross_region_restore_enabled`<sup>Optional</sup> <a name="cross_region_restore_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.crossRegionRestoreEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#cross_region_restore_enabled RecoveryServicesVault#cross_region_restore_enabled}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.encryption"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#encryption RecoveryServicesVault#encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#id RecoveryServicesVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#identity RecoveryServicesVault#identity}

---

##### `immutability`<sup>Optional</sup> <a name="immutability" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.immutability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#immutability RecoveryServicesVault#immutability}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.monitoring"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#monitoring RecoveryServicesVault#monitoring}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#public_network_access_enabled RecoveryServicesVault#public_network_access_enabled}.

---

##### `soft_delete_enabled`<sup>Optional</sup> <a name="soft_delete_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.softDeleteEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#soft_delete_enabled RecoveryServicesVault#soft_delete_enabled}.

---

##### `storage_mode_type`<sup>Optional</sup> <a name="storage_mode_type" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.storageModeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#storage_mode_type RecoveryServicesVault#storage_mode_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#tags RecoveryServicesVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#timeouts RecoveryServicesVault#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putMonitoring">put_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetClassicVmwareReplicationEnabled">reset_classic_vmware_replication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetCrossRegionRestoreEnabled">reset_cross_region_restore_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetImmutability">reset_immutability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetMonitoring">reset_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetSoftDeleteEnabled">reset_soft_delete_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetStorageModeType">reset_storage_mode_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_encryption` <a name="put_encryption" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putEncryption"></a>

```python
def put_encryption(
  infrastructure_encryption_enabled: typing.Union[bool, IResolvable],
  key_id: str,
  user_assigned_identity_id: str = None,
  use_system_assigned_identity: typing.Union[bool, IResolvable] = None
) -> None
```

###### `infrastructure_encryption_enabled`<sup>Required</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putEncryption.parameter.infrastructureEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#infrastructure_encryption_enabled RecoveryServicesVault#infrastructure_encryption_enabled}.

---

###### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putEncryption.parameter.keyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#key_id RecoveryServicesVault#key_id}.

---

###### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putEncryption.parameter.userAssignedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#user_assigned_identity_id RecoveryServicesVault#user_assigned_identity_id}.

---

###### `use_system_assigned_identity`<sup>Optional</sup> <a name="use_system_assigned_identity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putEncryption.parameter.useSystemAssignedIdentity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#use_system_assigned_identity RecoveryServicesVault#use_system_assigned_identity}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#type RecoveryServicesVault#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#identity_ids RecoveryServicesVault#identity_ids}.

---

##### `put_monitoring` <a name="put_monitoring" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putMonitoring"></a>

```python
def put_monitoring(
  alerts_for_all_job_failures_enabled: typing.Union[bool, IResolvable] = None,
  alerts_for_critical_operation_failures_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `alerts_for_all_job_failures_enabled`<sup>Optional</sup> <a name="alerts_for_all_job_failures_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putMonitoring.parameter.alertsForAllJobFailuresEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#alerts_for_all_job_failures_enabled RecoveryServicesVault#alerts_for_all_job_failures_enabled}.

---

###### `alerts_for_critical_operation_failures_enabled`<sup>Optional</sup> <a name="alerts_for_critical_operation_failures_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putMonitoring.parameter.alertsForCriticalOperationFailuresEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#alerts_for_critical_operation_failures_enabled RecoveryServicesVault#alerts_for_critical_operation_failures_enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#create RecoveryServicesVault#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#delete RecoveryServicesVault#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#read RecoveryServicesVault#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#update RecoveryServicesVault#update}.

---

##### `reset_classic_vmware_replication_enabled` <a name="reset_classic_vmware_replication_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetClassicVmwareReplicationEnabled"></a>

```python
def reset_classic_vmware_replication_enabled() -> None
```

##### `reset_cross_region_restore_enabled` <a name="reset_cross_region_restore_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetCrossRegionRestoreEnabled"></a>

```python
def reset_cross_region_restore_enabled() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_immutability` <a name="reset_immutability" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetImmutability"></a>

```python
def reset_immutability() -> None
```

##### `reset_monitoring` <a name="reset_monitoring" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetMonitoring"></a>

```python
def reset_monitoring() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_soft_delete_enabled` <a name="reset_soft_delete_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetSoftDeleteEnabled"></a>

```python
def reset_soft_delete_enabled() -> None
```

##### `reset_storage_mode_type` <a name="reset_storage_mode_type" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetStorageModeType"></a>

```python
def reset_storage_mode_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import recovery_services_vault

recoveryServicesVault.RecoveryServicesVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import recovery_services_vault

recoveryServicesVault.RecoveryServicesVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import recovery_services_vault

recoveryServicesVault.RecoveryServicesVault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference">RecoveryServicesVaultEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference">RecoveryServicesVaultIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference">RecoveryServicesVaultMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference">RecoveryServicesVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.classicVmwareReplicationEnabledInput">classic_vmware_replication_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.crossRegionRestoreEnabledInput">cross_region_restore_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.encryptionInput">encryption_input</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.immutabilityInput">immutability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.monitoringInput">monitoring_input</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.softDeleteEnabledInput">soft_delete_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.storageModeTypeInput">storage_mode_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.classicVmwareReplicationEnabled">classic_vmware_replication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.crossRegionRestoreEnabled">cross_region_restore_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.immutability">immutability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.softDeleteEnabled">soft_delete_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.storageModeType">storage_mode_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.encryption"></a>

```python
encryption: RecoveryServicesVaultEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference">RecoveryServicesVaultEncryptionOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.identity"></a>

```python
identity: RecoveryServicesVaultIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference">RecoveryServicesVaultIdentityOutputReference</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.monitoring"></a>

```python
monitoring: RecoveryServicesVaultMonitoringOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference">RecoveryServicesVaultMonitoringOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.timeouts"></a>

```python
timeouts: RecoveryServicesVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference">RecoveryServicesVaultTimeoutsOutputReference</a>

---

##### `classic_vmware_replication_enabled_input`<sup>Optional</sup> <a name="classic_vmware_replication_enabled_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.classicVmwareReplicationEnabledInput"></a>

```python
classic_vmware_replication_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cross_region_restore_enabled_input`<sup>Optional</sup> <a name="cross_region_restore_enabled_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.crossRegionRestoreEnabledInput"></a>

```python
cross_region_restore_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.encryptionInput"></a>

```python
encryption_input: RecoveryServicesVaultEncryption
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.identityInput"></a>

```python
identity_input: RecoveryServicesVaultIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `immutability_input`<sup>Optional</sup> <a name="immutability_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.immutabilityInput"></a>

```python
immutability_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `monitoring_input`<sup>Optional</sup> <a name="monitoring_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.monitoringInput"></a>

```python
monitoring_input: RecoveryServicesVaultMonitoring
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `soft_delete_enabled_input`<sup>Optional</sup> <a name="soft_delete_enabled_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.softDeleteEnabledInput"></a>

```python
soft_delete_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_mode_type_input`<sup>Optional</sup> <a name="storage_mode_type_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.storageModeTypeInput"></a>

```python
storage_mode_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RecoveryServicesVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a>]

---

##### `classic_vmware_replication_enabled`<sup>Required</sup> <a name="classic_vmware_replication_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.classicVmwareReplicationEnabled"></a>

```python
classic_vmware_replication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cross_region_restore_enabled`<sup>Required</sup> <a name="cross_region_restore_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.crossRegionRestoreEnabled"></a>

```python
cross_region_restore_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `immutability`<sup>Required</sup> <a name="immutability" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.immutability"></a>

```python
immutability: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `soft_delete_enabled`<sup>Required</sup> <a name="soft_delete_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.softDeleteEnabled"></a>

```python
soft_delete_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_mode_type`<sup>Required</sup> <a name="storage_mode_type" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.storageModeType"></a>

```python
storage_mode_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RecoveryServicesVaultConfig <a name="RecoveryServicesVaultConfig" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import recovery_services_vault

recoveryServicesVault.RecoveryServicesVaultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  sku: str,
  classic_vmware_replication_enabled: typing.Union[bool, IResolvable] = None,
  cross_region_restore_enabled: typing.Union[bool, IResolvable] = None,
  encryption: RecoveryServicesVaultEncryption = None,
  id: str = None,
  identity: RecoveryServicesVaultIdentity = None,
  immutability: str = None,
  monitoring: RecoveryServicesVaultMonitoring = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  soft_delete_enabled: typing.Union[bool, IResolvable] = None,
  storage_mode_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: RecoveryServicesVaultTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#location RecoveryServicesVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#name RecoveryServicesVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#resource_group_name RecoveryServicesVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#sku RecoveryServicesVault#sku}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.classicVmwareReplicationEnabled">classic_vmware_replication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#classic_vmware_replication_enabled RecoveryServicesVault#classic_vmware_replication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.crossRegionRestoreEnabled">cross_region_restore_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#cross_region_restore_enabled RecoveryServicesVault#cross_region_restore_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#id RecoveryServicesVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.immutability">immutability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#immutability RecoveryServicesVault#immutability}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#public_network_access_enabled RecoveryServicesVault#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.softDeleteEnabled">soft_delete_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#soft_delete_enabled RecoveryServicesVault#soft_delete_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.storageModeType">storage_mode_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#storage_mode_type RecoveryServicesVault#storage_mode_type}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#tags RecoveryServicesVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#location RecoveryServicesVault#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#name RecoveryServicesVault#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#resource_group_name RecoveryServicesVault#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#sku RecoveryServicesVault#sku}.

---

##### `classic_vmware_replication_enabled`<sup>Optional</sup> <a name="classic_vmware_replication_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.classicVmwareReplicationEnabled"></a>

```python
classic_vmware_replication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#classic_vmware_replication_enabled RecoveryServicesVault#classic_vmware_replication_enabled}.

---

##### `cross_region_restore_enabled`<sup>Optional</sup> <a name="cross_region_restore_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.crossRegionRestoreEnabled"></a>

```python
cross_region_restore_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#cross_region_restore_enabled RecoveryServicesVault#cross_region_restore_enabled}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.encryption"></a>

```python
encryption: RecoveryServicesVaultEncryption
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#encryption RecoveryServicesVault#encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#id RecoveryServicesVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.identity"></a>

```python
identity: RecoveryServicesVaultIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#identity RecoveryServicesVault#identity}

---

##### `immutability`<sup>Optional</sup> <a name="immutability" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.immutability"></a>

```python
immutability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#immutability RecoveryServicesVault#immutability}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.monitoring"></a>

```python
monitoring: RecoveryServicesVaultMonitoring
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#monitoring RecoveryServicesVault#monitoring}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#public_network_access_enabled RecoveryServicesVault#public_network_access_enabled}.

---

##### `soft_delete_enabled`<sup>Optional</sup> <a name="soft_delete_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.softDeleteEnabled"></a>

```python
soft_delete_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#soft_delete_enabled RecoveryServicesVault#soft_delete_enabled}.

---

##### `storage_mode_type`<sup>Optional</sup> <a name="storage_mode_type" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.storageModeType"></a>

```python
storage_mode_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#storage_mode_type RecoveryServicesVault#storage_mode_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#tags RecoveryServicesVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.timeouts"></a>

```python
timeouts: RecoveryServicesVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#timeouts RecoveryServicesVault#timeouts}

---

### RecoveryServicesVaultEncryption <a name="RecoveryServicesVaultEncryption" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import recovery_services_vault

recoveryServicesVault.RecoveryServicesVaultEncryption(
  infrastructure_encryption_enabled: typing.Union[bool, IResolvable],
  key_id: str,
  user_assigned_identity_id: str = None,
  use_system_assigned_identity: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#infrastructure_encryption_enabled RecoveryServicesVault#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#key_id RecoveryServicesVault#key_id}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#user_assigned_identity_id RecoveryServicesVault#user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.useSystemAssignedIdentity">use_system_assigned_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#use_system_assigned_identity RecoveryServicesVault#use_system_assigned_identity}. |

---

##### `infrastructure_encryption_enabled`<sup>Required</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.infrastructureEncryptionEnabled"></a>

```python
infrastructure_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#infrastructure_encryption_enabled RecoveryServicesVault#infrastructure_encryption_enabled}.

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#key_id RecoveryServicesVault#key_id}.

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#user_assigned_identity_id RecoveryServicesVault#user_assigned_identity_id}.

---

##### `use_system_assigned_identity`<sup>Optional</sup> <a name="use_system_assigned_identity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.useSystemAssignedIdentity"></a>

```python
use_system_assigned_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#use_system_assigned_identity RecoveryServicesVault#use_system_assigned_identity}.

---

### RecoveryServicesVaultIdentity <a name="RecoveryServicesVaultIdentity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import recovery_services_vault

recoveryServicesVault.RecoveryServicesVaultIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#type RecoveryServicesVault#type}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#identity_ids RecoveryServicesVault#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#type RecoveryServicesVault#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#identity_ids RecoveryServicesVault#identity_ids}.

---

### RecoveryServicesVaultMonitoring <a name="RecoveryServicesVaultMonitoring" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import recovery_services_vault

recoveryServicesVault.RecoveryServicesVaultMonitoring(
  alerts_for_all_job_failures_enabled: typing.Union[bool, IResolvable] = None,
  alerts_for_critical_operation_failures_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForAllJobFailuresEnabled">alerts_for_all_job_failures_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#alerts_for_all_job_failures_enabled RecoveryServicesVault#alerts_for_all_job_failures_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForCriticalOperationFailuresEnabled">alerts_for_critical_operation_failures_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#alerts_for_critical_operation_failures_enabled RecoveryServicesVault#alerts_for_critical_operation_failures_enabled}. |

---

##### `alerts_for_all_job_failures_enabled`<sup>Optional</sup> <a name="alerts_for_all_job_failures_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForAllJobFailuresEnabled"></a>

```python
alerts_for_all_job_failures_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#alerts_for_all_job_failures_enabled RecoveryServicesVault#alerts_for_all_job_failures_enabled}.

---

##### `alerts_for_critical_operation_failures_enabled`<sup>Optional</sup> <a name="alerts_for_critical_operation_failures_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForCriticalOperationFailuresEnabled"></a>

```python
alerts_for_critical_operation_failures_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#alerts_for_critical_operation_failures_enabled RecoveryServicesVault#alerts_for_critical_operation_failures_enabled}.

---

### RecoveryServicesVaultTimeouts <a name="RecoveryServicesVaultTimeouts" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import recovery_services_vault

recoveryServicesVault.RecoveryServicesVaultTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#create RecoveryServicesVault#create}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#delete RecoveryServicesVault#delete}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#read RecoveryServicesVault#read}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#update RecoveryServicesVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#create RecoveryServicesVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#delete RecoveryServicesVault#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#read RecoveryServicesVault#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/recovery_services_vault#update RecoveryServicesVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecoveryServicesVaultEncryptionOutputReference <a name="RecoveryServicesVaultEncryptionOutputReference" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import recovery_services_vault

recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resetUserAssignedIdentityId">reset_user_assigned_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resetUseSystemAssignedIdentity">reset_use_system_assigned_identity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_user_assigned_identity_id` <a name="reset_user_assigned_identity_id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resetUserAssignedIdentityId"></a>

```python
def reset_user_assigned_identity_id() -> None
```

##### `reset_use_system_assigned_identity` <a name="reset_use_system_assigned_identity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resetUseSystemAssignedIdentity"></a>

```python
def reset_use_system_assigned_identity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.infrastructureEncryptionEnabledInput">infrastructure_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.userAssignedIdentityIdInput">user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.useSystemAssignedIdentityInput">use_system_assigned_identity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.useSystemAssignedIdentity">use_system_assigned_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `infrastructure_encryption_enabled_input`<sup>Optional</sup> <a name="infrastructure_encryption_enabled_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.infrastructureEncryptionEnabledInput"></a>

```python
infrastructure_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `user_assigned_identity_id_input`<sup>Optional</sup> <a name="user_assigned_identity_id_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.userAssignedIdentityIdInput"></a>

```python
user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `use_system_assigned_identity_input`<sup>Optional</sup> <a name="use_system_assigned_identity_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.useSystemAssignedIdentityInput"></a>

```python
use_system_assigned_identity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `infrastructure_encryption_enabled`<sup>Required</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.infrastructureEncryptionEnabled"></a>

```python
infrastructure_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `use_system_assigned_identity`<sup>Required</sup> <a name="use_system_assigned_identity" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.useSystemAssignedIdentity"></a>

```python
use_system_assigned_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: RecoveryServicesVaultEncryption
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a>

---


### RecoveryServicesVaultIdentityOutputReference <a name="RecoveryServicesVaultIdentityOutputReference" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import recovery_services_vault

recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.internalValue"></a>

```python
internal_value: RecoveryServicesVaultIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a>

---


### RecoveryServicesVaultMonitoringOutputReference <a name="RecoveryServicesVaultMonitoringOutputReference" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import recovery_services_vault

recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForAllJobFailuresEnabled">reset_alerts_for_all_job_failures_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForCriticalOperationFailuresEnabled">reset_alerts_for_critical_operation_failures_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alerts_for_all_job_failures_enabled` <a name="reset_alerts_for_all_job_failures_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForAllJobFailuresEnabled"></a>

```python
def reset_alerts_for_all_job_failures_enabled() -> None
```

##### `reset_alerts_for_critical_operation_failures_enabled` <a name="reset_alerts_for_critical_operation_failures_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForCriticalOperationFailuresEnabled"></a>

```python
def reset_alerts_for_critical_operation_failures_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllJobFailuresEnabledInput">alerts_for_all_job_failures_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForCriticalOperationFailuresEnabledInput">alerts_for_critical_operation_failures_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllJobFailuresEnabled">alerts_for_all_job_failures_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForCriticalOperationFailuresEnabled">alerts_for_critical_operation_failures_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alerts_for_all_job_failures_enabled_input`<sup>Optional</sup> <a name="alerts_for_all_job_failures_enabled_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllJobFailuresEnabledInput"></a>

```python
alerts_for_all_job_failures_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alerts_for_critical_operation_failures_enabled_input`<sup>Optional</sup> <a name="alerts_for_critical_operation_failures_enabled_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForCriticalOperationFailuresEnabledInput"></a>

```python
alerts_for_critical_operation_failures_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alerts_for_all_job_failures_enabled`<sup>Required</sup> <a name="alerts_for_all_job_failures_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllJobFailuresEnabled"></a>

```python
alerts_for_all_job_failures_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alerts_for_critical_operation_failures_enabled`<sup>Required</sup> <a name="alerts_for_critical_operation_failures_enabled" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForCriticalOperationFailuresEnabled"></a>

```python
alerts_for_critical_operation_failures_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.internalValue"></a>

```python
internal_value: RecoveryServicesVaultMonitoring
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a>

---


### RecoveryServicesVaultTimeoutsOutputReference <a name="RecoveryServicesVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import recovery_services_vault

recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RecoveryServicesVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a>]

---



