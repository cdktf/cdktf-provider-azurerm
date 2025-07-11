# `machineLearningComputeCluster` Submodule <a name="`machineLearningComputeCluster` Submodule" id="@cdktf/provider-azurerm.machineLearningComputeCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningComputeCluster <a name="MachineLearningComputeCluster" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster azurerm_machine_learning_compute_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_cluster

machineLearningComputeCluster.MachineLearningComputeCluster(
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
  machine_learning_workspace_id: str,
  name: str,
  scale_settings: MachineLearningComputeClusterScaleSettings,
  vm_priority: str,
  vm_size: str,
  description: str = None,
  id: str = None,
  identity: MachineLearningComputeClusterIdentity = None,
  local_auth_enabled: typing.Union[bool, IResolvable] = None,
  node_public_ip_enabled: typing.Union[bool, IResolvable] = None,
  ssh: MachineLearningComputeClusterSsh = None,
  ssh_public_access_enabled: typing.Union[bool, IResolvable] = None,
  subnet_resource_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MachineLearningComputeClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#location MachineLearningComputeCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.machineLearningWorkspaceId">machine_learning_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#machine_learning_workspace_id MachineLearningComputeCluster#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#name MachineLearningComputeCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.scaleSettings">scale_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a></code> | scale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.vmPriority">vm_priority</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#vm_priority MachineLearningComputeCluster#vm_priority}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#vm_size MachineLearningComputeCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#description MachineLearningComputeCluster#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#id MachineLearningComputeCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#local_auth_enabled MachineLearningComputeCluster#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.nodePublicIpEnabled">node_public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#node_public_ip_enabled MachineLearningComputeCluster#node_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.ssh">ssh</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a></code> | ssh block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.sshPublicAccessEnabled">ssh_public_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#ssh_public_access_enabled MachineLearningComputeCluster#ssh_public_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.subnetResourceId">subnet_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#subnet_resource_id MachineLearningComputeCluster#subnet_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#tags MachineLearningComputeCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#location MachineLearningComputeCluster#location}.

---

##### `machine_learning_workspace_id`<sup>Required</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.machineLearningWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#machine_learning_workspace_id MachineLearningComputeCluster#machine_learning_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#name MachineLearningComputeCluster#name}.

---

##### `scale_settings`<sup>Required</sup> <a name="scale_settings" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.scaleSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a>

scale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#scale_settings MachineLearningComputeCluster#scale_settings}

---

##### `vm_priority`<sup>Required</sup> <a name="vm_priority" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.vmPriority"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#vm_priority MachineLearningComputeCluster#vm_priority}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#vm_size MachineLearningComputeCluster#vm_size}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#description MachineLearningComputeCluster#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#id MachineLearningComputeCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#identity MachineLearningComputeCluster#identity}

---

##### `local_auth_enabled`<sup>Optional</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.localAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#local_auth_enabled MachineLearningComputeCluster#local_auth_enabled}.

---

##### `node_public_ip_enabled`<sup>Optional</sup> <a name="node_public_ip_enabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.nodePublicIpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#node_public_ip_enabled MachineLearningComputeCluster#node_public_ip_enabled}.

---

##### `ssh`<sup>Optional</sup> <a name="ssh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.ssh"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a>

ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#ssh MachineLearningComputeCluster#ssh}

---

##### `ssh_public_access_enabled`<sup>Optional</sup> <a name="ssh_public_access_enabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.sshPublicAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#ssh_public_access_enabled MachineLearningComputeCluster#ssh_public_access_enabled}.

---

##### `subnet_resource_id`<sup>Optional</sup> <a name="subnet_resource_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.subnetResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#subnet_resource_id MachineLearningComputeCluster#subnet_resource_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#tags MachineLearningComputeCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#timeouts MachineLearningComputeCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putScaleSettings">put_scale_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putSsh">put_ssh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetLocalAuthEnabled">reset_local_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetNodePublicIpEnabled">reset_node_public_ip_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSsh">reset_ssh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSshPublicAccessEnabled">reset_ssh_public_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSubnetResourceId">reset_subnet_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#type MachineLearningComputeCluster#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#identity_ids MachineLearningComputeCluster#identity_ids}.

---

##### `put_scale_settings` <a name="put_scale_settings" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putScaleSettings"></a>

```python
def put_scale_settings(
  max_node_count: typing.Union[int, float],
  min_node_count: typing.Union[int, float],
  scale_down_nodes_after_idle_duration: str
) -> None
```

###### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putScaleSettings.parameter.maxNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#max_node_count MachineLearningComputeCluster#max_node_count}.

---

###### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putScaleSettings.parameter.minNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#min_node_count MachineLearningComputeCluster#min_node_count}.

---

###### `scale_down_nodes_after_idle_duration`<sup>Required</sup> <a name="scale_down_nodes_after_idle_duration" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putScaleSettings.parameter.scaleDownNodesAfterIdleDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#scale_down_nodes_after_idle_duration MachineLearningComputeCluster#scale_down_nodes_after_idle_duration}.

---

##### `put_ssh` <a name="put_ssh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putSsh"></a>

```python
def put_ssh(
  admin_username: str,
  admin_password: str = None,
  key_value: str = None
) -> None
```

###### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putSsh.parameter.adminUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#admin_username MachineLearningComputeCluster#admin_username}.

---

###### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putSsh.parameter.adminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#admin_password MachineLearningComputeCluster#admin_password}.

---

###### `key_value`<sup>Optional</sup> <a name="key_value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putSsh.parameter.keyValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#key_value MachineLearningComputeCluster#key_value}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#create MachineLearningComputeCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#delete MachineLearningComputeCluster#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#read MachineLearningComputeCluster#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#update MachineLearningComputeCluster#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_local_auth_enabled` <a name="reset_local_auth_enabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetLocalAuthEnabled"></a>

```python
def reset_local_auth_enabled() -> None
```

##### `reset_node_public_ip_enabled` <a name="reset_node_public_ip_enabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetNodePublicIpEnabled"></a>

```python
def reset_node_public_ip_enabled() -> None
```

##### `reset_ssh` <a name="reset_ssh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSsh"></a>

```python
def reset_ssh() -> None
```

##### `reset_ssh_public_access_enabled` <a name="reset_ssh_public_access_enabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSshPublicAccessEnabled"></a>

```python
def reset_ssh_public_access_enabled() -> None
```

##### `reset_subnet_resource_id` <a name="reset_subnet_resource_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSubnetResourceId"></a>

```python
def reset_subnet_resource_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MachineLearningComputeCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_cluster

machineLearningComputeCluster.MachineLearningComputeCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_cluster

machineLearningComputeCluster.MachineLearningComputeCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_cluster

machineLearningComputeCluster.MachineLearningComputeCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_cluster

machineLearningComputeCluster.MachineLearningComputeCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MachineLearningComputeCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MachineLearningComputeCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MachineLearningComputeCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningComputeCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference">MachineLearningComputeClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.scaleSettings">scale_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference">MachineLearningComputeClusterScaleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.ssh">ssh</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference">MachineLearningComputeClusterSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference">MachineLearningComputeClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.localAuthEnabledInput">local_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.machineLearningWorkspaceIdInput">machine_learning_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nodePublicIpEnabledInput">node_public_ip_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.scaleSettingsInput">scale_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshInput">ssh_input</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshPublicAccessEnabledInput">ssh_public_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.subnetResourceIdInput">subnet_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmPriorityInput">vm_priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.machineLearningWorkspaceId">machine_learning_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nodePublicIpEnabled">node_public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshPublicAccessEnabled">ssh_public_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.subnetResourceId">subnet_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmPriority">vm_priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.identity"></a>

```python
identity: MachineLearningComputeClusterIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference">MachineLearningComputeClusterIdentityOutputReference</a>

---

##### `scale_settings`<sup>Required</sup> <a name="scale_settings" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.scaleSettings"></a>

```python
scale_settings: MachineLearningComputeClusterScaleSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference">MachineLearningComputeClusterScaleSettingsOutputReference</a>

---

##### `ssh`<sup>Required</sup> <a name="ssh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.ssh"></a>

```python
ssh: MachineLearningComputeClusterSshOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference">MachineLearningComputeClusterSshOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.timeouts"></a>

```python
timeouts: MachineLearningComputeClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference">MachineLearningComputeClusterTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.identityInput"></a>

```python
identity_input: MachineLearningComputeClusterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_auth_enabled_input`<sup>Optional</sup> <a name="local_auth_enabled_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.localAuthEnabledInput"></a>

```python
local_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `machine_learning_workspace_id_input`<sup>Optional</sup> <a name="machine_learning_workspace_id_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.machineLearningWorkspaceIdInput"></a>

```python
machine_learning_workspace_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_public_ip_enabled_input`<sup>Optional</sup> <a name="node_public_ip_enabled_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nodePublicIpEnabledInput"></a>

```python
node_public_ip_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scale_settings_input`<sup>Optional</sup> <a name="scale_settings_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.scaleSettingsInput"></a>

```python
scale_settings_input: MachineLearningComputeClusterScaleSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a>

---

##### `ssh_input`<sup>Optional</sup> <a name="ssh_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshInput"></a>

```python
ssh_input: MachineLearningComputeClusterSsh
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a>

---

##### `ssh_public_access_enabled_input`<sup>Optional</sup> <a name="ssh_public_access_enabled_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshPublicAccessEnabledInput"></a>

```python
ssh_public_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_resource_id_input`<sup>Optional</sup> <a name="subnet_resource_id_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.subnetResourceIdInput"></a>

```python
subnet_resource_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MachineLearningComputeClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a>]

---

##### `vm_priority_input`<sup>Optional</sup> <a name="vm_priority_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmPriorityInput"></a>

```python
vm_priority_input: str
```

- *Type:* str

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_auth_enabled`<sup>Required</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.localAuthEnabled"></a>

```python
local_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `machine_learning_workspace_id`<sup>Required</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.machineLearningWorkspaceId"></a>

```python
machine_learning_workspace_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_public_ip_enabled`<sup>Required</sup> <a name="node_public_ip_enabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nodePublicIpEnabled"></a>

```python
node_public_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssh_public_access_enabled`<sup>Required</sup> <a name="ssh_public_access_enabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshPublicAccessEnabled"></a>

```python
ssh_public_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_resource_id`<sup>Required</sup> <a name="subnet_resource_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.subnetResourceId"></a>

```python
subnet_resource_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vm_priority`<sup>Required</sup> <a name="vm_priority" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmPriority"></a>

```python
vm_priority: str
```

- *Type:* str

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningComputeClusterConfig <a name="MachineLearningComputeClusterConfig" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_cluster

machineLearningComputeCluster.MachineLearningComputeClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  machine_learning_workspace_id: str,
  name: str,
  scale_settings: MachineLearningComputeClusterScaleSettings,
  vm_priority: str,
  vm_size: str,
  description: str = None,
  id: str = None,
  identity: MachineLearningComputeClusterIdentity = None,
  local_auth_enabled: typing.Union[bool, IResolvable] = None,
  node_public_ip_enabled: typing.Union[bool, IResolvable] = None,
  ssh: MachineLearningComputeClusterSsh = None,
  ssh_public_access_enabled: typing.Union[bool, IResolvable] = None,
  subnet_resource_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MachineLearningComputeClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#location MachineLearningComputeCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.machineLearningWorkspaceId">machine_learning_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#machine_learning_workspace_id MachineLearningComputeCluster#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#name MachineLearningComputeCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.scaleSettings">scale_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a></code> | scale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.vmPriority">vm_priority</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#vm_priority MachineLearningComputeCluster#vm_priority}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#vm_size MachineLearningComputeCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#description MachineLearningComputeCluster#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#id MachineLearningComputeCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#local_auth_enabled MachineLearningComputeCluster#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.nodePublicIpEnabled">node_public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#node_public_ip_enabled MachineLearningComputeCluster#node_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.ssh">ssh</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a></code> | ssh block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.sshPublicAccessEnabled">ssh_public_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#ssh_public_access_enabled MachineLearningComputeCluster#ssh_public_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.subnetResourceId">subnet_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#subnet_resource_id MachineLearningComputeCluster#subnet_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#tags MachineLearningComputeCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#location MachineLearningComputeCluster#location}.

---

##### `machine_learning_workspace_id`<sup>Required</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.machineLearningWorkspaceId"></a>

```python
machine_learning_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#machine_learning_workspace_id MachineLearningComputeCluster#machine_learning_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#name MachineLearningComputeCluster#name}.

---

##### `scale_settings`<sup>Required</sup> <a name="scale_settings" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.scaleSettings"></a>

```python
scale_settings: MachineLearningComputeClusterScaleSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a>

scale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#scale_settings MachineLearningComputeCluster#scale_settings}

---

##### `vm_priority`<sup>Required</sup> <a name="vm_priority" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.vmPriority"></a>

```python
vm_priority: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#vm_priority MachineLearningComputeCluster#vm_priority}.

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#vm_size MachineLearningComputeCluster#vm_size}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#description MachineLearningComputeCluster#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#id MachineLearningComputeCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.identity"></a>

```python
identity: MachineLearningComputeClusterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#identity MachineLearningComputeCluster#identity}

---

##### `local_auth_enabled`<sup>Optional</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.localAuthEnabled"></a>

```python
local_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#local_auth_enabled MachineLearningComputeCluster#local_auth_enabled}.

---

##### `node_public_ip_enabled`<sup>Optional</sup> <a name="node_public_ip_enabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.nodePublicIpEnabled"></a>

```python
node_public_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#node_public_ip_enabled MachineLearningComputeCluster#node_public_ip_enabled}.

---

##### `ssh`<sup>Optional</sup> <a name="ssh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.ssh"></a>

```python
ssh: MachineLearningComputeClusterSsh
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a>

ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#ssh MachineLearningComputeCluster#ssh}

---

##### `ssh_public_access_enabled`<sup>Optional</sup> <a name="ssh_public_access_enabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.sshPublicAccessEnabled"></a>

```python
ssh_public_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#ssh_public_access_enabled MachineLearningComputeCluster#ssh_public_access_enabled}.

---

##### `subnet_resource_id`<sup>Optional</sup> <a name="subnet_resource_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.subnetResourceId"></a>

```python
subnet_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#subnet_resource_id MachineLearningComputeCluster#subnet_resource_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#tags MachineLearningComputeCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.timeouts"></a>

```python
timeouts: MachineLearningComputeClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#timeouts MachineLearningComputeCluster#timeouts}

---

### MachineLearningComputeClusterIdentity <a name="MachineLearningComputeClusterIdentity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_cluster

machineLearningComputeCluster.MachineLearningComputeClusterIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#type MachineLearningComputeCluster#type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#identity_ids MachineLearningComputeCluster#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#type MachineLearningComputeCluster#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#identity_ids MachineLearningComputeCluster#identity_ids}.

---

### MachineLearningComputeClusterScaleSettings <a name="MachineLearningComputeClusterScaleSettings" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_cluster

machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings(
  max_node_count: typing.Union[int, float],
  min_node_count: typing.Union[int, float],
  scale_down_nodes_after_idle_duration: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#max_node_count MachineLearningComputeCluster#max_node_count}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#min_node_count MachineLearningComputeCluster#min_node_count}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.scaleDownNodesAfterIdleDuration">scale_down_nodes_after_idle_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#scale_down_nodes_after_idle_duration MachineLearningComputeCluster#scale_down_nodes_after_idle_duration}. |

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#max_node_count MachineLearningComputeCluster#max_node_count}.

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#min_node_count MachineLearningComputeCluster#min_node_count}.

---

##### `scale_down_nodes_after_idle_duration`<sup>Required</sup> <a name="scale_down_nodes_after_idle_duration" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.scaleDownNodesAfterIdleDuration"></a>

```python
scale_down_nodes_after_idle_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#scale_down_nodes_after_idle_duration MachineLearningComputeCluster#scale_down_nodes_after_idle_duration}.

---

### MachineLearningComputeClusterSsh <a name="MachineLearningComputeClusterSsh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_cluster

machineLearningComputeCluster.MachineLearningComputeClusterSsh(
  admin_username: str,
  admin_password: str = None,
  key_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.adminUsername">admin_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#admin_username MachineLearningComputeCluster#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#admin_password MachineLearningComputeCluster#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.keyValue">key_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#key_value MachineLearningComputeCluster#key_value}. |

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#admin_username MachineLearningComputeCluster#admin_username}.

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#admin_password MachineLearningComputeCluster#admin_password}.

---

##### `key_value`<sup>Optional</sup> <a name="key_value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.keyValue"></a>

```python
key_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#key_value MachineLearningComputeCluster#key_value}.

---

### MachineLearningComputeClusterTimeouts <a name="MachineLearningComputeClusterTimeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_cluster

machineLearningComputeCluster.MachineLearningComputeClusterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#create MachineLearningComputeCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#delete MachineLearningComputeCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#read MachineLearningComputeCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#update MachineLearningComputeCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#create MachineLearningComputeCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#delete MachineLearningComputeCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#read MachineLearningComputeCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/machine_learning_compute_cluster#update MachineLearningComputeCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningComputeClusterIdentityOutputReference <a name="MachineLearningComputeClusterIdentityOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_cluster

machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.internalValue"></a>

```python
internal_value: MachineLearningComputeClusterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a>

---


### MachineLearningComputeClusterScaleSettingsOutputReference <a name="MachineLearningComputeClusterScaleSettingsOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_cluster

machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.maxNodeCountInput">max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.minNodeCountInput">min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.scaleDownNodesAfterIdleDurationInput">scale_down_nodes_after_idle_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.scaleDownNodesAfterIdleDuration">scale_down_nodes_after_idle_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.maxNodeCountInput"></a>

```python
max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.minNodeCountInput"></a>

```python
min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_down_nodes_after_idle_duration_input`<sup>Optional</sup> <a name="scale_down_nodes_after_idle_duration_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.scaleDownNodesAfterIdleDurationInput"></a>

```python
scale_down_nodes_after_idle_duration_input: str
```

- *Type:* str

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_down_nodes_after_idle_duration`<sup>Required</sup> <a name="scale_down_nodes_after_idle_duration" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.scaleDownNodesAfterIdleDuration"></a>

```python
scale_down_nodes_after_idle_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.internalValue"></a>

```python
internal_value: MachineLearningComputeClusterScaleSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a>

---


### MachineLearningComputeClusterSshOutputReference <a name="MachineLearningComputeClusterSshOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_cluster

machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resetKeyValue">reset_key_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_admin_password` <a name="reset_admin_password" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_key_value` <a name="reset_key_value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resetKeyValue"></a>

```python
def reset_key_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminUsernameInput">admin_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.keyValueInput">key_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.keyValue">key_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `admin_username_input`<sup>Optional</sup> <a name="admin_username_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminUsernameInput"></a>

```python
admin_username_input: str
```

- *Type:* str

---

##### `key_value_input`<sup>Optional</sup> <a name="key_value_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.keyValueInput"></a>

```python
key_value_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `key_value`<sup>Required</sup> <a name="key_value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.keyValue"></a>

```python
key_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.internalValue"></a>

```python
internal_value: MachineLearningComputeClusterSsh
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a>

---


### MachineLearningComputeClusterTimeoutsOutputReference <a name="MachineLearningComputeClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_cluster

machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MachineLearningComputeClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a>]

---



