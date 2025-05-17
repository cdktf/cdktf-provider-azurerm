# `databricksWorkspace` Submodule <a name="`databricksWorkspace` Submodule" id="@cdktf/provider-azurerm.databricksWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksWorkspace <a name="DatabricksWorkspace" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace azurerm_databricks_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspace(
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
  access_connector_id: str = None,
  customer_managed_key_enabled: typing.Union[bool, IResolvable] = None,
  custom_parameters: DatabricksWorkspaceCustomParameters = None,
  default_storage_firewall_enabled: typing.Union[bool, IResolvable] = None,
  enhanced_security_compliance: DatabricksWorkspaceEnhancedSecurityCompliance = None,
  id: str = None,
  infrastructure_encryption_enabled: typing.Union[bool, IResolvable] = None,
  load_balancer_backend_address_pool_id: str = None,
  managed_disk_cmk_key_vault_id: str = None,
  managed_disk_cmk_key_vault_key_id: str = None,
  managed_disk_cmk_rotation_to_latest_version_enabled: typing.Union[bool, IResolvable] = None,
  managed_resource_group_name: str = None,
  managed_services_cmk_key_vault_id: str = None,
  managed_services_cmk_key_vault_key_id: str = None,
  network_security_group_rules_required: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: DatabricksWorkspaceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#location DatabricksWorkspace#location}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#name DatabricksWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#resource_group_name DatabricksWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#sku DatabricksWorkspace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.accessConnectorId">access_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#access_connector_id DatabricksWorkspace#access_connector_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.customerManagedKeyEnabled">customer_managed_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.customParameters">custom_parameters</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a></code> | custom_parameters block. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.defaultStorageFirewallEnabled">default_storage_firewall_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#default_storage_firewall_enabled DatabricksWorkspace#default_storage_firewall_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.enhancedSecurityCompliance">enhanced_security_compliance</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance">DatabricksWorkspaceEnhancedSecurityCompliance</a></code> | enhanced_security_compliance block. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#id DatabricksWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.loadBalancerBackendAddressPoolId">load_balancer_backend_address_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#load_balancer_backend_address_pool_id DatabricksWorkspace#load_balancer_backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedDiskCmkKeyVaultId">managed_disk_cmk_key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_id DatabricksWorkspace#managed_disk_cmk_key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedDiskCmkKeyVaultKeyId">managed_disk_cmk_key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_key_id DatabricksWorkspace#managed_disk_cmk_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedDiskCmkRotationToLatestVersionEnabled">managed_disk_cmk_rotation_to_latest_version_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_disk_cmk_rotation_to_latest_version_enabled DatabricksWorkspace#managed_disk_cmk_rotation_to_latest_version_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedResourceGroupName">managed_resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedServicesCmkKeyVaultId">managed_services_cmk_key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_id DatabricksWorkspace#managed_services_cmk_key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedServicesCmkKeyVaultKeyId">managed_services_cmk_key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_key_id DatabricksWorkspace#managed_services_cmk_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.networkSecurityGroupRulesRequired">network_security_group_rules_required</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#network_security_group_rules_required DatabricksWorkspace#network_security_group_rules_required}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#public_network_access_enabled DatabricksWorkspace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#tags DatabricksWorkspace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#location DatabricksWorkspace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#name DatabricksWorkspace#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#resource_group_name DatabricksWorkspace#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#sku DatabricksWorkspace#sku}.

---

##### `access_connector_id`<sup>Optional</sup> <a name="access_connector_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.accessConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#access_connector_id DatabricksWorkspace#access_connector_id}.

---

##### `customer_managed_key_enabled`<sup>Optional</sup> <a name="customer_managed_key_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.customerManagedKeyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}.

---

##### `custom_parameters`<sup>Optional</sup> <a name="custom_parameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.customParameters"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

custom_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#custom_parameters DatabricksWorkspace#custom_parameters}

---

##### `default_storage_firewall_enabled`<sup>Optional</sup> <a name="default_storage_firewall_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.defaultStorageFirewallEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#default_storage_firewall_enabled DatabricksWorkspace#default_storage_firewall_enabled}.

---

##### `enhanced_security_compliance`<sup>Optional</sup> <a name="enhanced_security_compliance" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.enhancedSecurityCompliance"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance">DatabricksWorkspaceEnhancedSecurityCompliance</a>

enhanced_security_compliance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#enhanced_security_compliance DatabricksWorkspace#enhanced_security_compliance}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#id DatabricksWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructure_encryption_enabled`<sup>Optional</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.infrastructureEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}.

---

##### `load_balancer_backend_address_pool_id`<sup>Optional</sup> <a name="load_balancer_backend_address_pool_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.loadBalancerBackendAddressPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#load_balancer_backend_address_pool_id DatabricksWorkspace#load_balancer_backend_address_pool_id}.

---

##### `managed_disk_cmk_key_vault_id`<sup>Optional</sup> <a name="managed_disk_cmk_key_vault_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedDiskCmkKeyVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_id DatabricksWorkspace#managed_disk_cmk_key_vault_id}.

---

##### `managed_disk_cmk_key_vault_key_id`<sup>Optional</sup> <a name="managed_disk_cmk_key_vault_key_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedDiskCmkKeyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_key_id DatabricksWorkspace#managed_disk_cmk_key_vault_key_id}.

---

##### `managed_disk_cmk_rotation_to_latest_version_enabled`<sup>Optional</sup> <a name="managed_disk_cmk_rotation_to_latest_version_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedDiskCmkRotationToLatestVersionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_disk_cmk_rotation_to_latest_version_enabled DatabricksWorkspace#managed_disk_cmk_rotation_to_latest_version_enabled}.

---

##### `managed_resource_group_name`<sup>Optional</sup> <a name="managed_resource_group_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedResourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}.

---

##### `managed_services_cmk_key_vault_id`<sup>Optional</sup> <a name="managed_services_cmk_key_vault_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedServicesCmkKeyVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_id DatabricksWorkspace#managed_services_cmk_key_vault_id}.

---

##### `managed_services_cmk_key_vault_key_id`<sup>Optional</sup> <a name="managed_services_cmk_key_vault_key_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedServicesCmkKeyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_key_id DatabricksWorkspace#managed_services_cmk_key_vault_key_id}.

---

##### `network_security_group_rules_required`<sup>Optional</sup> <a name="network_security_group_rules_required" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.networkSecurityGroupRulesRequired"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#network_security_group_rules_required DatabricksWorkspace#network_security_group_rules_required}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#public_network_access_enabled DatabricksWorkspace#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#tags DatabricksWorkspace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#timeouts DatabricksWorkspace#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters">put_custom_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putEnhancedSecurityCompliance">put_enhanced_security_compliance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetAccessConnectorId">reset_access_connector_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomerManagedKeyEnabled">reset_customer_managed_key_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomParameters">reset_custom_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetDefaultStorageFirewallEnabled">reset_default_storage_firewall_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetEnhancedSecurityCompliance">reset_enhanced_security_compliance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetInfrastructureEncryptionEnabled">reset_infrastructure_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetLoadBalancerBackendAddressPoolId">reset_load_balancer_backend_address_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkKeyVaultId">reset_managed_disk_cmk_key_vault_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkKeyVaultKeyId">reset_managed_disk_cmk_key_vault_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkRotationToLatestVersionEnabled">reset_managed_disk_cmk_rotation_to_latest_version_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedResourceGroupName">reset_managed_resource_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedServicesCmkKeyVaultId">reset_managed_services_cmk_key_vault_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedServicesCmkKeyVaultKeyId">reset_managed_services_cmk_key_vault_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetNetworkSecurityGroupRulesRequired">reset_network_security_group_rules_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_parameters` <a name="put_custom_parameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters"></a>

```python
def put_custom_parameters(
  machine_learning_workspace_id: str = None,
  nat_gateway_name: str = None,
  no_public_ip: typing.Union[bool, IResolvable] = None,
  private_subnet_name: str = None,
  private_subnet_network_security_group_association_id: str = None,
  public_ip_name: str = None,
  public_subnet_name: str = None,
  public_subnet_network_security_group_association_id: str = None,
  storage_account_name: str = None,
  storage_account_sku_name: str = None,
  virtual_network_id: str = None,
  vnet_address_prefix: str = None
) -> None
```

###### `machine_learning_workspace_id`<sup>Optional</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.machineLearningWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#machine_learning_workspace_id DatabricksWorkspace#machine_learning_workspace_id}.

---

###### `nat_gateway_name`<sup>Optional</sup> <a name="nat_gateway_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.natGatewayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#nat_gateway_name DatabricksWorkspace#nat_gateway_name}.

---

###### `no_public_ip`<sup>Optional</sup> <a name="no_public_ip" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.noPublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#no_public_ip DatabricksWorkspace#no_public_ip}.

---

###### `private_subnet_name`<sup>Optional</sup> <a name="private_subnet_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.privateSubnetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#private_subnet_name DatabricksWorkspace#private_subnet_name}.

---

###### `private_subnet_network_security_group_association_id`<sup>Optional</sup> <a name="private_subnet_network_security_group_association_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.privateSubnetNetworkSecurityGroupAssociationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#private_subnet_network_security_group_association_id DatabricksWorkspace#private_subnet_network_security_group_association_id}.

---

###### `public_ip_name`<sup>Optional</sup> <a name="public_ip_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.publicIpName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#public_ip_name DatabricksWorkspace#public_ip_name}.

---

###### `public_subnet_name`<sup>Optional</sup> <a name="public_subnet_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.publicSubnetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#public_subnet_name DatabricksWorkspace#public_subnet_name}.

---

###### `public_subnet_network_security_group_association_id`<sup>Optional</sup> <a name="public_subnet_network_security_group_association_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.publicSubnetNetworkSecurityGroupAssociationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#public_subnet_network_security_group_association_id DatabricksWorkspace#public_subnet_network_security_group_association_id}.

---

###### `storage_account_name`<sup>Optional</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.storageAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#storage_account_name DatabricksWorkspace#storage_account_name}.

---

###### `storage_account_sku_name`<sup>Optional</sup> <a name="storage_account_sku_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.storageAccountSkuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#storage_account_sku_name DatabricksWorkspace#storage_account_sku_name}.

---

###### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#virtual_network_id DatabricksWorkspace#virtual_network_id}.

---

###### `vnet_address_prefix`<sup>Optional</sup> <a name="vnet_address_prefix" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.vnetAddressPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#vnet_address_prefix DatabricksWorkspace#vnet_address_prefix}.

---

##### `put_enhanced_security_compliance` <a name="put_enhanced_security_compliance" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putEnhancedSecurityCompliance"></a>

```python
def put_enhanced_security_compliance(
  automatic_cluster_update_enabled: typing.Union[bool, IResolvable] = None,
  compliance_security_profile_enabled: typing.Union[bool, IResolvable] = None,
  compliance_security_profile_standards: typing.List[str] = None,
  enhanced_security_monitoring_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `automatic_cluster_update_enabled`<sup>Optional</sup> <a name="automatic_cluster_update_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putEnhancedSecurityCompliance.parameter.automaticClusterUpdateEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#automatic_cluster_update_enabled DatabricksWorkspace#automatic_cluster_update_enabled}.

---

###### `compliance_security_profile_enabled`<sup>Optional</sup> <a name="compliance_security_profile_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putEnhancedSecurityCompliance.parameter.complianceSecurityProfileEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#compliance_security_profile_enabled DatabricksWorkspace#compliance_security_profile_enabled}.

---

###### `compliance_security_profile_standards`<sup>Optional</sup> <a name="compliance_security_profile_standards" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putEnhancedSecurityCompliance.parameter.complianceSecurityProfileStandards"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#compliance_security_profile_standards DatabricksWorkspace#compliance_security_profile_standards}.

---

###### `enhanced_security_monitoring_enabled`<sup>Optional</sup> <a name="enhanced_security_monitoring_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putEnhancedSecurityCompliance.parameter.enhancedSecurityMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#enhanced_security_monitoring_enabled DatabricksWorkspace#enhanced_security_monitoring_enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#create DatabricksWorkspace#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#delete DatabricksWorkspace#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#read DatabricksWorkspace#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#update DatabricksWorkspace#update}.

---

##### `reset_access_connector_id` <a name="reset_access_connector_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetAccessConnectorId"></a>

```python
def reset_access_connector_id() -> None
```

##### `reset_customer_managed_key_enabled` <a name="reset_customer_managed_key_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomerManagedKeyEnabled"></a>

```python
def reset_customer_managed_key_enabled() -> None
```

##### `reset_custom_parameters` <a name="reset_custom_parameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomParameters"></a>

```python
def reset_custom_parameters() -> None
```

##### `reset_default_storage_firewall_enabled` <a name="reset_default_storage_firewall_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetDefaultStorageFirewallEnabled"></a>

```python
def reset_default_storage_firewall_enabled() -> None
```

##### `reset_enhanced_security_compliance` <a name="reset_enhanced_security_compliance" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetEnhancedSecurityCompliance"></a>

```python
def reset_enhanced_security_compliance() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_infrastructure_encryption_enabled` <a name="reset_infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetInfrastructureEncryptionEnabled"></a>

```python
def reset_infrastructure_encryption_enabled() -> None
```

##### `reset_load_balancer_backend_address_pool_id` <a name="reset_load_balancer_backend_address_pool_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetLoadBalancerBackendAddressPoolId"></a>

```python
def reset_load_balancer_backend_address_pool_id() -> None
```

##### `reset_managed_disk_cmk_key_vault_id` <a name="reset_managed_disk_cmk_key_vault_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkKeyVaultId"></a>

```python
def reset_managed_disk_cmk_key_vault_id() -> None
```

##### `reset_managed_disk_cmk_key_vault_key_id` <a name="reset_managed_disk_cmk_key_vault_key_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkKeyVaultKeyId"></a>

```python
def reset_managed_disk_cmk_key_vault_key_id() -> None
```

##### `reset_managed_disk_cmk_rotation_to_latest_version_enabled` <a name="reset_managed_disk_cmk_rotation_to_latest_version_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkRotationToLatestVersionEnabled"></a>

```python
def reset_managed_disk_cmk_rotation_to_latest_version_enabled() -> None
```

##### `reset_managed_resource_group_name` <a name="reset_managed_resource_group_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedResourceGroupName"></a>

```python
def reset_managed_resource_group_name() -> None
```

##### `reset_managed_services_cmk_key_vault_id` <a name="reset_managed_services_cmk_key_vault_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedServicesCmkKeyVaultId"></a>

```python
def reset_managed_services_cmk_key_vault_id() -> None
```

##### `reset_managed_services_cmk_key_vault_key_id` <a name="reset_managed_services_cmk_key_vault_key_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedServicesCmkKeyVaultKeyId"></a>

```python
def reset_managed_services_cmk_key_vault_key_id() -> None
```

##### `reset_network_security_group_rules_required` <a name="reset_network_security_group_rules_required" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetNetworkSecurityGroupRulesRequired"></a>

```python
def reset_network_security_group_rules_required() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabricksWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabricksWorkspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabricksWorkspace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabricksWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabricksWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParameters">custom_parameters</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference">DatabricksWorkspaceCustomParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.enhancedSecurityCompliance">enhanced_security_compliance</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference">DatabricksWorkspaceEnhancedSecurityComplianceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskIdentity">managed_disk_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList">DatabricksWorkspaceManagedDiskIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupId">managed_resource_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.storageAccountIdentity">storage_account_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList">DatabricksWorkspaceStorageAccountIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference">DatabricksWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceUrl">workspace_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.accessConnectorIdInput">access_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabledInput">customer_managed_key_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParametersInput">custom_parameters_input</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.defaultStorageFirewallEnabledInput">default_storage_firewall_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.enhancedSecurityComplianceInput">enhanced_security_compliance_input</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance">DatabricksWorkspaceEnhancedSecurityCompliance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabledInput">infrastructure_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolIdInput">load_balancer_backend_address_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultIdInput">managed_disk_cmk_key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyIdInput">managed_disk_cmk_key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabledInput">managed_disk_cmk_rotation_to_latest_version_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupNameInput">managed_resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultIdInput">managed_services_cmk_key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyIdInput">managed_services_cmk_key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequiredInput">network_security_group_rules_required_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.accessConnectorId">access_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabled">customer_managed_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.defaultStorageFirewallEnabled">default_storage_firewall_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolId">load_balancer_backend_address_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultId">managed_disk_cmk_key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyId">managed_disk_cmk_key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabled">managed_disk_cmk_rotation_to_latest_version_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupName">managed_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultId">managed_services_cmk_key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyId">managed_services_cmk_key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequired">network_security_group_rules_required</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_parameters`<sup>Required</sup> <a name="custom_parameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParameters"></a>

```python
custom_parameters: DatabricksWorkspaceCustomParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference">DatabricksWorkspaceCustomParametersOutputReference</a>

---

##### `disk_encryption_set_id`<sup>Required</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

---

##### `enhanced_security_compliance`<sup>Required</sup> <a name="enhanced_security_compliance" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.enhancedSecurityCompliance"></a>

```python
enhanced_security_compliance: DatabricksWorkspaceEnhancedSecurityComplianceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference">DatabricksWorkspaceEnhancedSecurityComplianceOutputReference</a>

---

##### `managed_disk_identity`<sup>Required</sup> <a name="managed_disk_identity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskIdentity"></a>

```python
managed_disk_identity: DatabricksWorkspaceManagedDiskIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList">DatabricksWorkspaceManagedDiskIdentityList</a>

---

##### `managed_resource_group_id`<sup>Required</sup> <a name="managed_resource_group_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupId"></a>

```python
managed_resource_group_id: str
```

- *Type:* str

---

##### `storage_account_identity`<sup>Required</sup> <a name="storage_account_identity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.storageAccountIdentity"></a>

```python
storage_account_identity: DatabricksWorkspaceStorageAccountIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList">DatabricksWorkspaceStorageAccountIdentityList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeouts"></a>

```python
timeouts: DatabricksWorkspaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference">DatabricksWorkspaceTimeoutsOutputReference</a>

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `workspace_url`<sup>Required</sup> <a name="workspace_url" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceUrl"></a>

```python
workspace_url: str
```

- *Type:* str

---

##### `access_connector_id_input`<sup>Optional</sup> <a name="access_connector_id_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.accessConnectorIdInput"></a>

```python
access_connector_id_input: str
```

- *Type:* str

---

##### `customer_managed_key_enabled_input`<sup>Optional</sup> <a name="customer_managed_key_enabled_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabledInput"></a>

```python
customer_managed_key_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_parameters_input`<sup>Optional</sup> <a name="custom_parameters_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParametersInput"></a>

```python
custom_parameters_input: DatabricksWorkspaceCustomParameters
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

---

##### `default_storage_firewall_enabled_input`<sup>Optional</sup> <a name="default_storage_firewall_enabled_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.defaultStorageFirewallEnabledInput"></a>

```python
default_storage_firewall_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enhanced_security_compliance_input`<sup>Optional</sup> <a name="enhanced_security_compliance_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.enhancedSecurityComplianceInput"></a>

```python
enhanced_security_compliance_input: DatabricksWorkspaceEnhancedSecurityCompliance
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance">DatabricksWorkspaceEnhancedSecurityCompliance</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `infrastructure_encryption_enabled_input`<sup>Optional</sup> <a name="infrastructure_encryption_enabled_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabledInput"></a>

```python
infrastructure_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `load_balancer_backend_address_pool_id_input`<sup>Optional</sup> <a name="load_balancer_backend_address_pool_id_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolIdInput"></a>

```python
load_balancer_backend_address_pool_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `managed_disk_cmk_key_vault_id_input`<sup>Optional</sup> <a name="managed_disk_cmk_key_vault_id_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultIdInput"></a>

```python
managed_disk_cmk_key_vault_id_input: str
```

- *Type:* str

---

##### `managed_disk_cmk_key_vault_key_id_input`<sup>Optional</sup> <a name="managed_disk_cmk_key_vault_key_id_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyIdInput"></a>

```python
managed_disk_cmk_key_vault_key_id_input: str
```

- *Type:* str

---

##### `managed_disk_cmk_rotation_to_latest_version_enabled_input`<sup>Optional</sup> <a name="managed_disk_cmk_rotation_to_latest_version_enabled_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabledInput"></a>

```python
managed_disk_cmk_rotation_to_latest_version_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_resource_group_name_input`<sup>Optional</sup> <a name="managed_resource_group_name_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupNameInput"></a>

```python
managed_resource_group_name_input: str
```

- *Type:* str

---

##### `managed_services_cmk_key_vault_id_input`<sup>Optional</sup> <a name="managed_services_cmk_key_vault_id_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultIdInput"></a>

```python
managed_services_cmk_key_vault_id_input: str
```

- *Type:* str

---

##### `managed_services_cmk_key_vault_key_id_input`<sup>Optional</sup> <a name="managed_services_cmk_key_vault_key_id_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyIdInput"></a>

```python
managed_services_cmk_key_vault_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_security_group_rules_required_input`<sup>Optional</sup> <a name="network_security_group_rules_required_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequiredInput"></a>

```python
network_security_group_rules_required_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabricksWorkspaceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>]

---

##### `access_connector_id`<sup>Required</sup> <a name="access_connector_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.accessConnectorId"></a>

```python
access_connector_id: str
```

- *Type:* str

---

##### `customer_managed_key_enabled`<sup>Required</sup> <a name="customer_managed_key_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabled"></a>

```python
customer_managed_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_storage_firewall_enabled`<sup>Required</sup> <a name="default_storage_firewall_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.defaultStorageFirewallEnabled"></a>

```python
default_storage_firewall_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_encryption_enabled`<sup>Required</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabled"></a>

```python
infrastructure_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `load_balancer_backend_address_pool_id`<sup>Required</sup> <a name="load_balancer_backend_address_pool_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolId"></a>

```python
load_balancer_backend_address_pool_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_disk_cmk_key_vault_id`<sup>Required</sup> <a name="managed_disk_cmk_key_vault_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultId"></a>

```python
managed_disk_cmk_key_vault_id: str
```

- *Type:* str

---

##### `managed_disk_cmk_key_vault_key_id`<sup>Required</sup> <a name="managed_disk_cmk_key_vault_key_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyId"></a>

```python
managed_disk_cmk_key_vault_key_id: str
```

- *Type:* str

---

##### `managed_disk_cmk_rotation_to_latest_version_enabled`<sup>Required</sup> <a name="managed_disk_cmk_rotation_to_latest_version_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabled"></a>

```python
managed_disk_cmk_rotation_to_latest_version_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_resource_group_name`<sup>Required</sup> <a name="managed_resource_group_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupName"></a>

```python
managed_resource_group_name: str
```

- *Type:* str

---

##### `managed_services_cmk_key_vault_id`<sup>Required</sup> <a name="managed_services_cmk_key_vault_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultId"></a>

```python
managed_services_cmk_key_vault_id: str
```

- *Type:* str

---

##### `managed_services_cmk_key_vault_key_id`<sup>Required</sup> <a name="managed_services_cmk_key_vault_key_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyId"></a>

```python
managed_services_cmk_key_vault_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_security_group_rules_required`<sup>Required</sup> <a name="network_security_group_rules_required" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequired"></a>

```python
network_security_group_rules_required: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksWorkspaceConfig <a name="DatabricksWorkspaceConfig" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspaceConfig(
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
  access_connector_id: str = None,
  customer_managed_key_enabled: typing.Union[bool, IResolvable] = None,
  custom_parameters: DatabricksWorkspaceCustomParameters = None,
  default_storage_firewall_enabled: typing.Union[bool, IResolvable] = None,
  enhanced_security_compliance: DatabricksWorkspaceEnhancedSecurityCompliance = None,
  id: str = None,
  infrastructure_encryption_enabled: typing.Union[bool, IResolvable] = None,
  load_balancer_backend_address_pool_id: str = None,
  managed_disk_cmk_key_vault_id: str = None,
  managed_disk_cmk_key_vault_key_id: str = None,
  managed_disk_cmk_rotation_to_latest_version_enabled: typing.Union[bool, IResolvable] = None,
  managed_resource_group_name: str = None,
  managed_services_cmk_key_vault_id: str = None,
  managed_services_cmk_key_vault_key_id: str = None,
  network_security_group_rules_required: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: DatabricksWorkspaceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#location DatabricksWorkspace#location}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#name DatabricksWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#resource_group_name DatabricksWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#sku DatabricksWorkspace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.accessConnectorId">access_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#access_connector_id DatabricksWorkspace#access_connector_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customerManagedKeyEnabled">customer_managed_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customParameters">custom_parameters</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a></code> | custom_parameters block. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.defaultStorageFirewallEnabled">default_storage_firewall_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#default_storage_firewall_enabled DatabricksWorkspace#default_storage_firewall_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.enhancedSecurityCompliance">enhanced_security_compliance</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance">DatabricksWorkspaceEnhancedSecurityCompliance</a></code> | enhanced_security_compliance block. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#id DatabricksWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.loadBalancerBackendAddressPoolId">load_balancer_backend_address_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#load_balancer_backend_address_pool_id DatabricksWorkspace#load_balancer_backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkKeyVaultId">managed_disk_cmk_key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_id DatabricksWorkspace#managed_disk_cmk_key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkKeyVaultKeyId">managed_disk_cmk_key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_key_id DatabricksWorkspace#managed_disk_cmk_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkRotationToLatestVersionEnabled">managed_disk_cmk_rotation_to_latest_version_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_disk_cmk_rotation_to_latest_version_enabled DatabricksWorkspace#managed_disk_cmk_rotation_to_latest_version_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedResourceGroupName">managed_resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedServicesCmkKeyVaultId">managed_services_cmk_key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_id DatabricksWorkspace#managed_services_cmk_key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedServicesCmkKeyVaultKeyId">managed_services_cmk_key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_key_id DatabricksWorkspace#managed_services_cmk_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.networkSecurityGroupRulesRequired">network_security_group_rules_required</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#network_security_group_rules_required DatabricksWorkspace#network_security_group_rules_required}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#public_network_access_enabled DatabricksWorkspace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#tags DatabricksWorkspace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#location DatabricksWorkspace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#name DatabricksWorkspace#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#resource_group_name DatabricksWorkspace#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#sku DatabricksWorkspace#sku}.

---

##### `access_connector_id`<sup>Optional</sup> <a name="access_connector_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.accessConnectorId"></a>

```python
access_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#access_connector_id DatabricksWorkspace#access_connector_id}.

---

##### `customer_managed_key_enabled`<sup>Optional</sup> <a name="customer_managed_key_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customerManagedKeyEnabled"></a>

```python
customer_managed_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}.

---

##### `custom_parameters`<sup>Optional</sup> <a name="custom_parameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customParameters"></a>

```python
custom_parameters: DatabricksWorkspaceCustomParameters
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

custom_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#custom_parameters DatabricksWorkspace#custom_parameters}

---

##### `default_storage_firewall_enabled`<sup>Optional</sup> <a name="default_storage_firewall_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.defaultStorageFirewallEnabled"></a>

```python
default_storage_firewall_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#default_storage_firewall_enabled DatabricksWorkspace#default_storage_firewall_enabled}.

---

##### `enhanced_security_compliance`<sup>Optional</sup> <a name="enhanced_security_compliance" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.enhancedSecurityCompliance"></a>

```python
enhanced_security_compliance: DatabricksWorkspaceEnhancedSecurityCompliance
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance">DatabricksWorkspaceEnhancedSecurityCompliance</a>

enhanced_security_compliance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#enhanced_security_compliance DatabricksWorkspace#enhanced_security_compliance}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#id DatabricksWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructure_encryption_enabled`<sup>Optional</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.infrastructureEncryptionEnabled"></a>

```python
infrastructure_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}.

---

##### `load_balancer_backend_address_pool_id`<sup>Optional</sup> <a name="load_balancer_backend_address_pool_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.loadBalancerBackendAddressPoolId"></a>

```python
load_balancer_backend_address_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#load_balancer_backend_address_pool_id DatabricksWorkspace#load_balancer_backend_address_pool_id}.

---

##### `managed_disk_cmk_key_vault_id`<sup>Optional</sup> <a name="managed_disk_cmk_key_vault_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkKeyVaultId"></a>

```python
managed_disk_cmk_key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_id DatabricksWorkspace#managed_disk_cmk_key_vault_id}.

---

##### `managed_disk_cmk_key_vault_key_id`<sup>Optional</sup> <a name="managed_disk_cmk_key_vault_key_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkKeyVaultKeyId"></a>

```python
managed_disk_cmk_key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_key_id DatabricksWorkspace#managed_disk_cmk_key_vault_key_id}.

---

##### `managed_disk_cmk_rotation_to_latest_version_enabled`<sup>Optional</sup> <a name="managed_disk_cmk_rotation_to_latest_version_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkRotationToLatestVersionEnabled"></a>

```python
managed_disk_cmk_rotation_to_latest_version_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_disk_cmk_rotation_to_latest_version_enabled DatabricksWorkspace#managed_disk_cmk_rotation_to_latest_version_enabled}.

---

##### `managed_resource_group_name`<sup>Optional</sup> <a name="managed_resource_group_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedResourceGroupName"></a>

```python
managed_resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}.

---

##### `managed_services_cmk_key_vault_id`<sup>Optional</sup> <a name="managed_services_cmk_key_vault_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedServicesCmkKeyVaultId"></a>

```python
managed_services_cmk_key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_id DatabricksWorkspace#managed_services_cmk_key_vault_id}.

---

##### `managed_services_cmk_key_vault_key_id`<sup>Optional</sup> <a name="managed_services_cmk_key_vault_key_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedServicesCmkKeyVaultKeyId"></a>

```python
managed_services_cmk_key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_key_id DatabricksWorkspace#managed_services_cmk_key_vault_key_id}.

---

##### `network_security_group_rules_required`<sup>Optional</sup> <a name="network_security_group_rules_required" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.networkSecurityGroupRulesRequired"></a>

```python
network_security_group_rules_required: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#network_security_group_rules_required DatabricksWorkspace#network_security_group_rules_required}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#public_network_access_enabled DatabricksWorkspace#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#tags DatabricksWorkspace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.timeouts"></a>

```python
timeouts: DatabricksWorkspaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#timeouts DatabricksWorkspace#timeouts}

---

### DatabricksWorkspaceCustomParameters <a name="DatabricksWorkspaceCustomParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspaceCustomParameters(
  machine_learning_workspace_id: str = None,
  nat_gateway_name: str = None,
  no_public_ip: typing.Union[bool, IResolvable] = None,
  private_subnet_name: str = None,
  private_subnet_network_security_group_association_id: str = None,
  public_ip_name: str = None,
  public_subnet_name: str = None,
  public_subnet_network_security_group_association_id: str = None,
  storage_account_name: str = None,
  storage_account_sku_name: str = None,
  virtual_network_id: str = None,
  vnet_address_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.machineLearningWorkspaceId">machine_learning_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#machine_learning_workspace_id DatabricksWorkspace#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.natGatewayName">nat_gateway_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#nat_gateway_name DatabricksWorkspace#nat_gateway_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.noPublicIp">no_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#no_public_ip DatabricksWorkspace#no_public_ip}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetName">private_subnet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#private_subnet_name DatabricksWorkspace#private_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetNetworkSecurityGroupAssociationId">private_subnet_network_security_group_association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#private_subnet_network_security_group_association_id DatabricksWorkspace#private_subnet_network_security_group_association_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicIpName">public_ip_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#public_ip_name DatabricksWorkspace#public_ip_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetName">public_subnet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#public_subnet_name DatabricksWorkspace#public_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetNetworkSecurityGroupAssociationId">public_subnet_network_security_group_association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#public_subnet_network_security_group_association_id DatabricksWorkspace#public_subnet_network_security_group_association_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#storage_account_name DatabricksWorkspace#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountSkuName">storage_account_sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#storage_account_sku_name DatabricksWorkspace#storage_account_sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#virtual_network_id DatabricksWorkspace#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.vnetAddressPrefix">vnet_address_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#vnet_address_prefix DatabricksWorkspace#vnet_address_prefix}. |

---

##### `machine_learning_workspace_id`<sup>Optional</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.machineLearningWorkspaceId"></a>

```python
machine_learning_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#machine_learning_workspace_id DatabricksWorkspace#machine_learning_workspace_id}.

---

##### `nat_gateway_name`<sup>Optional</sup> <a name="nat_gateway_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.natGatewayName"></a>

```python
nat_gateway_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#nat_gateway_name DatabricksWorkspace#nat_gateway_name}.

---

##### `no_public_ip`<sup>Optional</sup> <a name="no_public_ip" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.noPublicIp"></a>

```python
no_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#no_public_ip DatabricksWorkspace#no_public_ip}.

---

##### `private_subnet_name`<sup>Optional</sup> <a name="private_subnet_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetName"></a>

```python
private_subnet_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#private_subnet_name DatabricksWorkspace#private_subnet_name}.

---

##### `private_subnet_network_security_group_association_id`<sup>Optional</sup> <a name="private_subnet_network_security_group_association_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetNetworkSecurityGroupAssociationId"></a>

```python
private_subnet_network_security_group_association_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#private_subnet_network_security_group_association_id DatabricksWorkspace#private_subnet_network_security_group_association_id}.

---

##### `public_ip_name`<sup>Optional</sup> <a name="public_ip_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicIpName"></a>

```python
public_ip_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#public_ip_name DatabricksWorkspace#public_ip_name}.

---

##### `public_subnet_name`<sup>Optional</sup> <a name="public_subnet_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetName"></a>

```python
public_subnet_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#public_subnet_name DatabricksWorkspace#public_subnet_name}.

---

##### `public_subnet_network_security_group_association_id`<sup>Optional</sup> <a name="public_subnet_network_security_group_association_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetNetworkSecurityGroupAssociationId"></a>

```python
public_subnet_network_security_group_association_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#public_subnet_network_security_group_association_id DatabricksWorkspace#public_subnet_network_security_group_association_id}.

---

##### `storage_account_name`<sup>Optional</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#storage_account_name DatabricksWorkspace#storage_account_name}.

---

##### `storage_account_sku_name`<sup>Optional</sup> <a name="storage_account_sku_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountSkuName"></a>

```python
storage_account_sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#storage_account_sku_name DatabricksWorkspace#storage_account_sku_name}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#virtual_network_id DatabricksWorkspace#virtual_network_id}.

---

##### `vnet_address_prefix`<sup>Optional</sup> <a name="vnet_address_prefix" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.vnetAddressPrefix"></a>

```python
vnet_address_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#vnet_address_prefix DatabricksWorkspace#vnet_address_prefix}.

---

### DatabricksWorkspaceEnhancedSecurityCompliance <a name="DatabricksWorkspaceEnhancedSecurityCompliance" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance(
  automatic_cluster_update_enabled: typing.Union[bool, IResolvable] = None,
  compliance_security_profile_enabled: typing.Union[bool, IResolvable] = None,
  compliance_security_profile_standards: typing.List[str] = None,
  enhanced_security_monitoring_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance.property.automaticClusterUpdateEnabled">automatic_cluster_update_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#automatic_cluster_update_enabled DatabricksWorkspace#automatic_cluster_update_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance.property.complianceSecurityProfileEnabled">compliance_security_profile_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#compliance_security_profile_enabled DatabricksWorkspace#compliance_security_profile_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance.property.complianceSecurityProfileStandards">compliance_security_profile_standards</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#compliance_security_profile_standards DatabricksWorkspace#compliance_security_profile_standards}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance.property.enhancedSecurityMonitoringEnabled">enhanced_security_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#enhanced_security_monitoring_enabled DatabricksWorkspace#enhanced_security_monitoring_enabled}. |

---

##### `automatic_cluster_update_enabled`<sup>Optional</sup> <a name="automatic_cluster_update_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance.property.automaticClusterUpdateEnabled"></a>

```python
automatic_cluster_update_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#automatic_cluster_update_enabled DatabricksWorkspace#automatic_cluster_update_enabled}.

---

##### `compliance_security_profile_enabled`<sup>Optional</sup> <a name="compliance_security_profile_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance.property.complianceSecurityProfileEnabled"></a>

```python
compliance_security_profile_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#compliance_security_profile_enabled DatabricksWorkspace#compliance_security_profile_enabled}.

---

##### `compliance_security_profile_standards`<sup>Optional</sup> <a name="compliance_security_profile_standards" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance.property.complianceSecurityProfileStandards"></a>

```python
compliance_security_profile_standards: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#compliance_security_profile_standards DatabricksWorkspace#compliance_security_profile_standards}.

---

##### `enhanced_security_monitoring_enabled`<sup>Optional</sup> <a name="enhanced_security_monitoring_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance.property.enhancedSecurityMonitoringEnabled"></a>

```python
enhanced_security_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#enhanced_security_monitoring_enabled DatabricksWorkspace#enhanced_security_monitoring_enabled}.

---

### DatabricksWorkspaceManagedDiskIdentity <a name="DatabricksWorkspaceManagedDiskIdentity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity()
```


### DatabricksWorkspaceStorageAccountIdentity <a name="DatabricksWorkspaceStorageAccountIdentity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity()
```


### DatabricksWorkspaceTimeouts <a name="DatabricksWorkspaceTimeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspaceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#create DatabricksWorkspace#create}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#delete DatabricksWorkspace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#read DatabricksWorkspace#read}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#update DatabricksWorkspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#create DatabricksWorkspace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#delete DatabricksWorkspace#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#read DatabricksWorkspace#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/databricks_workspace#update DatabricksWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabricksWorkspaceCustomParametersOutputReference <a name="DatabricksWorkspaceCustomParametersOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetMachineLearningWorkspaceId">reset_machine_learning_workspace_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNatGatewayName">reset_nat_gateway_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNoPublicIp">reset_no_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetName">reset_private_subnet_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetNetworkSecurityGroupAssociationId">reset_private_subnet_network_security_group_association_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicIpName">reset_public_ip_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetName">reset_public_subnet_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetNetworkSecurityGroupAssociationId">reset_public_subnet_network_security_group_association_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountName">reset_storage_account_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountSkuName">reset_storage_account_sku_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVnetAddressPrefix">reset_vnet_address_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_machine_learning_workspace_id` <a name="reset_machine_learning_workspace_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetMachineLearningWorkspaceId"></a>

```python
def reset_machine_learning_workspace_id() -> None
```

##### `reset_nat_gateway_name` <a name="reset_nat_gateway_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNatGatewayName"></a>

```python
def reset_nat_gateway_name() -> None
```

##### `reset_no_public_ip` <a name="reset_no_public_ip" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNoPublicIp"></a>

```python
def reset_no_public_ip() -> None
```

##### `reset_private_subnet_name` <a name="reset_private_subnet_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetName"></a>

```python
def reset_private_subnet_name() -> None
```

##### `reset_private_subnet_network_security_group_association_id` <a name="reset_private_subnet_network_security_group_association_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetNetworkSecurityGroupAssociationId"></a>

```python
def reset_private_subnet_network_security_group_association_id() -> None
```

##### `reset_public_ip_name` <a name="reset_public_ip_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicIpName"></a>

```python
def reset_public_ip_name() -> None
```

##### `reset_public_subnet_name` <a name="reset_public_subnet_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetName"></a>

```python
def reset_public_subnet_name() -> None
```

##### `reset_public_subnet_network_security_group_association_id` <a name="reset_public_subnet_network_security_group_association_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetNetworkSecurityGroupAssociationId"></a>

```python
def reset_public_subnet_network_security_group_association_id() -> None
```

##### `reset_storage_account_name` <a name="reset_storage_account_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountName"></a>

```python
def reset_storage_account_name() -> None
```

##### `reset_storage_account_sku_name` <a name="reset_storage_account_sku_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountSkuName"></a>

```python
def reset_storage_account_sku_name() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```

##### `reset_vnet_address_prefix` <a name="reset_vnet_address_prefix" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVnetAddressPrefix"></a>

```python
def reset_vnet_address_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceIdInput">machine_learning_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayNameInput">nat_gateway_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIpInput">no_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNameInput">private_subnet_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationIdInput">private_subnet_network_security_group_association_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpNameInput">public_ip_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNameInput">public_subnet_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationIdInput">public_subnet_network_security_group_association_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountNameInput">storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuNameInput">storage_account_sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefixInput">vnet_address_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceId">machine_learning_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayName">nat_gateway_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIp">no_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetName">private_subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationId">private_subnet_network_security_group_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpName">public_ip_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetName">public_subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationId">public_subnet_network_security_group_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuName">storage_account_sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefix">vnet_address_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `machine_learning_workspace_id_input`<sup>Optional</sup> <a name="machine_learning_workspace_id_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceIdInput"></a>

```python
machine_learning_workspace_id_input: str
```

- *Type:* str

---

##### `nat_gateway_name_input`<sup>Optional</sup> <a name="nat_gateway_name_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayNameInput"></a>

```python
nat_gateway_name_input: str
```

- *Type:* str

---

##### `no_public_ip_input`<sup>Optional</sup> <a name="no_public_ip_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIpInput"></a>

```python
no_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_subnet_name_input`<sup>Optional</sup> <a name="private_subnet_name_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNameInput"></a>

```python
private_subnet_name_input: str
```

- *Type:* str

---

##### `private_subnet_network_security_group_association_id_input`<sup>Optional</sup> <a name="private_subnet_network_security_group_association_id_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationIdInput"></a>

```python
private_subnet_network_security_group_association_id_input: str
```

- *Type:* str

---

##### `public_ip_name_input`<sup>Optional</sup> <a name="public_ip_name_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpNameInput"></a>

```python
public_ip_name_input: str
```

- *Type:* str

---

##### `public_subnet_name_input`<sup>Optional</sup> <a name="public_subnet_name_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNameInput"></a>

```python
public_subnet_name_input: str
```

- *Type:* str

---

##### `public_subnet_network_security_group_association_id_input`<sup>Optional</sup> <a name="public_subnet_network_security_group_association_id_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationIdInput"></a>

```python
public_subnet_network_security_group_association_id_input: str
```

- *Type:* str

---

##### `storage_account_name_input`<sup>Optional</sup> <a name="storage_account_name_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountNameInput"></a>

```python
storage_account_name_input: str
```

- *Type:* str

---

##### `storage_account_sku_name_input`<sup>Optional</sup> <a name="storage_account_sku_name_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuNameInput"></a>

```python
storage_account_sku_name_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `vnet_address_prefix_input`<sup>Optional</sup> <a name="vnet_address_prefix_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefixInput"></a>

```python
vnet_address_prefix_input: str
```

- *Type:* str

---

##### `machine_learning_workspace_id`<sup>Required</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceId"></a>

```python
machine_learning_workspace_id: str
```

- *Type:* str

---

##### `nat_gateway_name`<sup>Required</sup> <a name="nat_gateway_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayName"></a>

```python
nat_gateway_name: str
```

- *Type:* str

---

##### `no_public_ip`<sup>Required</sup> <a name="no_public_ip" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIp"></a>

```python
no_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_subnet_name`<sup>Required</sup> <a name="private_subnet_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetName"></a>

```python
private_subnet_name: str
```

- *Type:* str

---

##### `private_subnet_network_security_group_association_id`<sup>Required</sup> <a name="private_subnet_network_security_group_association_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationId"></a>

```python
private_subnet_network_security_group_association_id: str
```

- *Type:* str

---

##### `public_ip_name`<sup>Required</sup> <a name="public_ip_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpName"></a>

```python
public_ip_name: str
```

- *Type:* str

---

##### `public_subnet_name`<sup>Required</sup> <a name="public_subnet_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetName"></a>

```python
public_subnet_name: str
```

- *Type:* str

---

##### `public_subnet_network_security_group_association_id`<sup>Required</sup> <a name="public_subnet_network_security_group_association_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationId"></a>

```python
public_subnet_network_security_group_association_id: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `storage_account_sku_name`<sup>Required</sup> <a name="storage_account_sku_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuName"></a>

```python
storage_account_sku_name: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `vnet_address_prefix`<sup>Required</sup> <a name="vnet_address_prefix" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefix"></a>

```python
vnet_address_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.internalValue"></a>

```python
internal_value: DatabricksWorkspaceCustomParameters
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

---


### DatabricksWorkspaceEnhancedSecurityComplianceOutputReference <a name="DatabricksWorkspaceEnhancedSecurityComplianceOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.resetAutomaticClusterUpdateEnabled">reset_automatic_cluster_update_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.resetComplianceSecurityProfileEnabled">reset_compliance_security_profile_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.resetComplianceSecurityProfileStandards">reset_compliance_security_profile_standards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.resetEnhancedSecurityMonitoringEnabled">reset_enhanced_security_monitoring_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_automatic_cluster_update_enabled` <a name="reset_automatic_cluster_update_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.resetAutomaticClusterUpdateEnabled"></a>

```python
def reset_automatic_cluster_update_enabled() -> None
```

##### `reset_compliance_security_profile_enabled` <a name="reset_compliance_security_profile_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.resetComplianceSecurityProfileEnabled"></a>

```python
def reset_compliance_security_profile_enabled() -> None
```

##### `reset_compliance_security_profile_standards` <a name="reset_compliance_security_profile_standards" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.resetComplianceSecurityProfileStandards"></a>

```python
def reset_compliance_security_profile_standards() -> None
```

##### `reset_enhanced_security_monitoring_enabled` <a name="reset_enhanced_security_monitoring_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.resetEnhancedSecurityMonitoringEnabled"></a>

```python
def reset_enhanced_security_monitoring_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.automaticClusterUpdateEnabledInput">automatic_cluster_update_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.complianceSecurityProfileEnabledInput">compliance_security_profile_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.complianceSecurityProfileStandardsInput">compliance_security_profile_standards_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.enhancedSecurityMonitoringEnabledInput">enhanced_security_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.automaticClusterUpdateEnabled">automatic_cluster_update_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.complianceSecurityProfileEnabled">compliance_security_profile_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.complianceSecurityProfileStandards">compliance_security_profile_standards</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.enhancedSecurityMonitoringEnabled">enhanced_security_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance">DatabricksWorkspaceEnhancedSecurityCompliance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic_cluster_update_enabled_input`<sup>Optional</sup> <a name="automatic_cluster_update_enabled_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.automaticClusterUpdateEnabledInput"></a>

```python
automatic_cluster_update_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compliance_security_profile_enabled_input`<sup>Optional</sup> <a name="compliance_security_profile_enabled_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.complianceSecurityProfileEnabledInput"></a>

```python
compliance_security_profile_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compliance_security_profile_standards_input`<sup>Optional</sup> <a name="compliance_security_profile_standards_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.complianceSecurityProfileStandardsInput"></a>

```python
compliance_security_profile_standards_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enhanced_security_monitoring_enabled_input`<sup>Optional</sup> <a name="enhanced_security_monitoring_enabled_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.enhancedSecurityMonitoringEnabledInput"></a>

```python
enhanced_security_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `automatic_cluster_update_enabled`<sup>Required</sup> <a name="automatic_cluster_update_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.automaticClusterUpdateEnabled"></a>

```python
automatic_cluster_update_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compliance_security_profile_enabled`<sup>Required</sup> <a name="compliance_security_profile_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.complianceSecurityProfileEnabled"></a>

```python
compliance_security_profile_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compliance_security_profile_standards`<sup>Required</sup> <a name="compliance_security_profile_standards" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.complianceSecurityProfileStandards"></a>

```python
compliance_security_profile_standards: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enhanced_security_monitoring_enabled`<sup>Required</sup> <a name="enhanced_security_monitoring_enabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.enhancedSecurityMonitoringEnabled"></a>

```python
enhanced_security_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityComplianceOutputReference.property.internalValue"></a>

```python
internal_value: DatabricksWorkspaceEnhancedSecurityCompliance
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceEnhancedSecurityCompliance">DatabricksWorkspaceEnhancedSecurityCompliance</a>

---


### DatabricksWorkspaceManagedDiskIdentityList <a name="DatabricksWorkspaceManagedDiskIdentityList" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabricksWorkspaceManagedDiskIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabricksWorkspaceManagedDiskIdentityOutputReference <a name="DatabricksWorkspaceManagedDiskIdentityOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity">DatabricksWorkspaceManagedDiskIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DatabricksWorkspaceManagedDiskIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity">DatabricksWorkspaceManagedDiskIdentity</a>

---


### DatabricksWorkspaceStorageAccountIdentityList <a name="DatabricksWorkspaceStorageAccountIdentityList" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabricksWorkspaceStorageAccountIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabricksWorkspaceStorageAccountIdentityOutputReference <a name="DatabricksWorkspaceStorageAccountIdentityOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity">DatabricksWorkspaceStorageAccountIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DatabricksWorkspaceStorageAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity">DatabricksWorkspaceStorageAccountIdentity</a>

---


### DatabricksWorkspaceTimeoutsOutputReference <a name="DatabricksWorkspaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import databricks_workspace

databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabricksWorkspaceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>]

---



