# `workloadsSapDiscoveryVirtualInstance` Submodule <a name="`workloadsSapDiscoveryVirtualInstance` Submodule" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkloadsSapDiscoveryVirtualInstance <a name="WorkloadsSapDiscoveryVirtualInstance" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance azurerm_workloads_sap_discovery_virtual_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import workloads_sap_discovery_virtual_instance

workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  central_server_virtual_machine_id: str,
  environment: str,
  location: str,
  name: str,
  resource_group_name: str,
  sap_product: str,
  id: str = None,
  identity: WorkloadsSapDiscoveryVirtualInstanceIdentity = None,
  managed_resource_group_name: str = None,
  managed_resources_network_access_type: str = None,
  managed_storage_account_name: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: WorkloadsSapDiscoveryVirtualInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.centralServerVirtualMachineId">central_server_virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#central_server_virtual_machine_id WorkloadsSapDiscoveryVirtualInstance#central_server_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.environment">environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#environment WorkloadsSapDiscoveryVirtualInstance#environment}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#location WorkloadsSapDiscoveryVirtualInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#name WorkloadsSapDiscoveryVirtualInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#resource_group_name WorkloadsSapDiscoveryVirtualInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.sapProduct">sap_product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#sap_product WorkloadsSapDiscoveryVirtualInstance#sap_product}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#id WorkloadsSapDiscoveryVirtualInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.managedResourceGroupName">managed_resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_resource_group_name WorkloadsSapDiscoveryVirtualInstance#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.managedResourcesNetworkAccessType">managed_resources_network_access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_resources_network_access_type WorkloadsSapDiscoveryVirtualInstance#managed_resources_network_access_type}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.managedStorageAccountName">managed_storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_storage_account_name WorkloadsSapDiscoveryVirtualInstance#managed_storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#tags WorkloadsSapDiscoveryVirtualInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `central_server_virtual_machine_id`<sup>Required</sup> <a name="central_server_virtual_machine_id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.centralServerVirtualMachineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#central_server_virtual_machine_id WorkloadsSapDiscoveryVirtualInstance#central_server_virtual_machine_id}.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.environment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#environment WorkloadsSapDiscoveryVirtualInstance#environment}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#location WorkloadsSapDiscoveryVirtualInstance#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#name WorkloadsSapDiscoveryVirtualInstance#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#resource_group_name WorkloadsSapDiscoveryVirtualInstance#resource_group_name}.

---

##### `sap_product`<sup>Required</sup> <a name="sap_product" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.sapProduct"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#sap_product WorkloadsSapDiscoveryVirtualInstance#sap_product}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#id WorkloadsSapDiscoveryVirtualInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#identity WorkloadsSapDiscoveryVirtualInstance#identity}

---

##### `managed_resource_group_name`<sup>Optional</sup> <a name="managed_resource_group_name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.managedResourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_resource_group_name WorkloadsSapDiscoveryVirtualInstance#managed_resource_group_name}.

---

##### `managed_resources_network_access_type`<sup>Optional</sup> <a name="managed_resources_network_access_type" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.managedResourcesNetworkAccessType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_resources_network_access_type WorkloadsSapDiscoveryVirtualInstance#managed_resources_network_access_type}.

---

##### `managed_storage_account_name`<sup>Optional</sup> <a name="managed_storage_account_name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.managedStorageAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_storage_account_name WorkloadsSapDiscoveryVirtualInstance#managed_storage_account_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#tags WorkloadsSapDiscoveryVirtualInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#timeouts WorkloadsSapDiscoveryVirtualInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedResourceGroupName">reset_managed_resource_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedResourcesNetworkAccessType">reset_managed_resources_network_access_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedStorageAccountName">reset_managed_storage_account_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putIdentity"></a>

```python
def put_identity(
  identity_ids: typing.List[str],
  type: str
) -> None
```

###### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#identity_ids WorkloadsSapDiscoveryVirtualInstance#identity_ids}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#type WorkloadsSapDiscoveryVirtualInstance#type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#create WorkloadsSapDiscoveryVirtualInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#delete WorkloadsSapDiscoveryVirtualInstance#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#read WorkloadsSapDiscoveryVirtualInstance#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#update WorkloadsSapDiscoveryVirtualInstance#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_managed_resource_group_name` <a name="reset_managed_resource_group_name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedResourceGroupName"></a>

```python
def reset_managed_resource_group_name() -> None
```

##### `reset_managed_resources_network_access_type` <a name="reset_managed_resources_network_access_type" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedResourcesNetworkAccessType"></a>

```python
def reset_managed_resources_network_access_type() -> None
```

##### `reset_managed_storage_account_name` <a name="reset_managed_storage_account_name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedStorageAccountName"></a>

```python
def reset_managed_storage_account_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkloadsSapDiscoveryVirtualInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import workloads_sap_discovery_virtual_instance

workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import workloads_sap_discovery_virtual_instance

workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import workloads_sap_discovery_virtual_instance

workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import workloads_sap_discovery_virtual_instance

workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkloadsSapDiscoveryVirtualInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkloadsSapDiscoveryVirtualInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkloadsSapDiscoveryVirtualInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkloadsSapDiscoveryVirtualInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference">WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference">WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineIdInput">central_server_virtual_machine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupNameInput">managed_resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourcesNetworkAccessTypeInput">managed_resources_network_access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountNameInput">managed_storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProductInput">sap_product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineId">central_server_virtual_machine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupName">managed_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourcesNetworkAccessType">managed_resources_network_access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountName">managed_storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProduct">sap_product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identity"></a>

```python
identity: WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference">WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeouts"></a>

```python
timeouts: WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference">WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference</a>

---

##### `central_server_virtual_machine_id_input`<sup>Optional</sup> <a name="central_server_virtual_machine_id_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineIdInput"></a>

```python
central_server_virtual_machine_id_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identityInput"></a>

```python
identity_input: WorkloadsSapDiscoveryVirtualInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `managed_resource_group_name_input`<sup>Optional</sup> <a name="managed_resource_group_name_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupNameInput"></a>

```python
managed_resource_group_name_input: str
```

- *Type:* str

---

##### `managed_resources_network_access_type_input`<sup>Optional</sup> <a name="managed_resources_network_access_type_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourcesNetworkAccessTypeInput"></a>

```python
managed_resources_network_access_type_input: str
```

- *Type:* str

---

##### `managed_storage_account_name_input`<sup>Optional</sup> <a name="managed_storage_account_name_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountNameInput"></a>

```python
managed_storage_account_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sap_product_input`<sup>Optional</sup> <a name="sap_product_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProductInput"></a>

```python
sap_product_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | WorkloadsSapDiscoveryVirtualInstanceTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a>

---

##### `central_server_virtual_machine_id`<sup>Required</sup> <a name="central_server_virtual_machine_id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineId"></a>

```python
central_server_virtual_machine_id: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_resource_group_name`<sup>Required</sup> <a name="managed_resource_group_name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupName"></a>

```python
managed_resource_group_name: str
```

- *Type:* str

---

##### `managed_resources_network_access_type`<sup>Required</sup> <a name="managed_resources_network_access_type" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourcesNetworkAccessType"></a>

```python
managed_resources_network_access_type: str
```

- *Type:* str

---

##### `managed_storage_account_name`<sup>Required</sup> <a name="managed_storage_account_name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountName"></a>

```python
managed_storage_account_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sap_product`<sup>Required</sup> <a name="sap_product" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProduct"></a>

```python
sap_product: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkloadsSapDiscoveryVirtualInstanceConfig <a name="WorkloadsSapDiscoveryVirtualInstanceConfig" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import workloads_sap_discovery_virtual_instance

workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  central_server_virtual_machine_id: str,
  environment: str,
  location: str,
  name: str,
  resource_group_name: str,
  sap_product: str,
  id: str = None,
  identity: WorkloadsSapDiscoveryVirtualInstanceIdentity = None,
  managed_resource_group_name: str = None,
  managed_resources_network_access_type: str = None,
  managed_storage_account_name: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: WorkloadsSapDiscoveryVirtualInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.centralServerVirtualMachineId">central_server_virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#central_server_virtual_machine_id WorkloadsSapDiscoveryVirtualInstance#central_server_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.environment">environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#environment WorkloadsSapDiscoveryVirtualInstance#environment}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#location WorkloadsSapDiscoveryVirtualInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#name WorkloadsSapDiscoveryVirtualInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#resource_group_name WorkloadsSapDiscoveryVirtualInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.sapProduct">sap_product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#sap_product WorkloadsSapDiscoveryVirtualInstance#sap_product}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#id WorkloadsSapDiscoveryVirtualInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedResourceGroupName">managed_resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_resource_group_name WorkloadsSapDiscoveryVirtualInstance#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedResourcesNetworkAccessType">managed_resources_network_access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_resources_network_access_type WorkloadsSapDiscoveryVirtualInstance#managed_resources_network_access_type}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedStorageAccountName">managed_storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_storage_account_name WorkloadsSapDiscoveryVirtualInstance#managed_storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#tags WorkloadsSapDiscoveryVirtualInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `central_server_virtual_machine_id`<sup>Required</sup> <a name="central_server_virtual_machine_id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.centralServerVirtualMachineId"></a>

```python
central_server_virtual_machine_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#central_server_virtual_machine_id WorkloadsSapDiscoveryVirtualInstance#central_server_virtual_machine_id}.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#environment WorkloadsSapDiscoveryVirtualInstance#environment}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#location WorkloadsSapDiscoveryVirtualInstance#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#name WorkloadsSapDiscoveryVirtualInstance#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#resource_group_name WorkloadsSapDiscoveryVirtualInstance#resource_group_name}.

---

##### `sap_product`<sup>Required</sup> <a name="sap_product" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.sapProduct"></a>

```python
sap_product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#sap_product WorkloadsSapDiscoveryVirtualInstance#sap_product}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#id WorkloadsSapDiscoveryVirtualInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.identity"></a>

```python
identity: WorkloadsSapDiscoveryVirtualInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#identity WorkloadsSapDiscoveryVirtualInstance#identity}

---

##### `managed_resource_group_name`<sup>Optional</sup> <a name="managed_resource_group_name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedResourceGroupName"></a>

```python
managed_resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_resource_group_name WorkloadsSapDiscoveryVirtualInstance#managed_resource_group_name}.

---

##### `managed_resources_network_access_type`<sup>Optional</sup> <a name="managed_resources_network_access_type" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedResourcesNetworkAccessType"></a>

```python
managed_resources_network_access_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_resources_network_access_type WorkloadsSapDiscoveryVirtualInstance#managed_resources_network_access_type}.

---

##### `managed_storage_account_name`<sup>Optional</sup> <a name="managed_storage_account_name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedStorageAccountName"></a>

```python
managed_storage_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_storage_account_name WorkloadsSapDiscoveryVirtualInstance#managed_storage_account_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#tags WorkloadsSapDiscoveryVirtualInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.timeouts"></a>

```python
timeouts: WorkloadsSapDiscoveryVirtualInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#timeouts WorkloadsSapDiscoveryVirtualInstance#timeouts}

---

### WorkloadsSapDiscoveryVirtualInstanceIdentity <a name="WorkloadsSapDiscoveryVirtualInstanceIdentity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import workloads_sap_discovery_virtual_instance

workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity(
  identity_ids: typing.List[str],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#identity_ids WorkloadsSapDiscoveryVirtualInstance#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#type WorkloadsSapDiscoveryVirtualInstance#type}. |

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#identity_ids WorkloadsSapDiscoveryVirtualInstance#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#type WorkloadsSapDiscoveryVirtualInstance#type}.

---

### WorkloadsSapDiscoveryVirtualInstanceTimeouts <a name="WorkloadsSapDiscoveryVirtualInstanceTimeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import workloads_sap_discovery_virtual_instance

workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#create WorkloadsSapDiscoveryVirtualInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#delete WorkloadsSapDiscoveryVirtualInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#read WorkloadsSapDiscoveryVirtualInstance#read}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#update WorkloadsSapDiscoveryVirtualInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#create WorkloadsSapDiscoveryVirtualInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#delete WorkloadsSapDiscoveryVirtualInstance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#read WorkloadsSapDiscoveryVirtualInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/workloads_sap_discovery_virtual_instance#update WorkloadsSapDiscoveryVirtualInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference <a name="WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import workloads_sap_discovery_virtual_instance

workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.internalValue"></a>

```python
internal_value: WorkloadsSapDiscoveryVirtualInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

---


### WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference <a name="WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import workloads_sap_discovery_virtual_instance

workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkloadsSapDiscoveryVirtualInstanceTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a>

---



