# `machineLearningComputeInstance` Submodule <a name="`machineLearningComputeInstance` Submodule" id="@cdktf/provider-azurerm.machineLearningComputeInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningComputeInstance <a name="MachineLearningComputeInstance" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance azurerm_machine_learning_compute_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_instance

machineLearningComputeInstance.MachineLearningComputeInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  machine_learning_workspace_id: str,
  name: str,
  virtual_machine_size: str,
  assign_to_user: MachineLearningComputeInstanceAssignToUser = None,
  authorization_type: str = None,
  description: str = None,
  id: str = None,
  identity: MachineLearningComputeInstanceIdentity = None,
  local_auth_enabled: typing.Union[bool, IResolvable] = None,
  node_public_ip_enabled: typing.Union[bool, IResolvable] = None,
  ssh: MachineLearningComputeInstanceSsh = None,
  subnet_resource_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MachineLearningComputeInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.machineLearningWorkspaceId">machine_learning_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#machine_learning_workspace_id MachineLearningComputeInstance#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#name MachineLearningComputeInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.virtualMachineSize">virtual_machine_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#virtual_machine_size MachineLearningComputeInstance#virtual_machine_size}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.assignToUser">assign_to_user</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a></code> | assign_to_user block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.authorizationType">authorization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#authorization_type MachineLearningComputeInstance#authorization_type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#description MachineLearningComputeInstance#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#id MachineLearningComputeInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#local_auth_enabled MachineLearningComputeInstance#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.nodePublicIpEnabled">node_public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#node_public_ip_enabled MachineLearningComputeInstance#node_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.ssh">ssh</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a></code> | ssh block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.subnetResourceId">subnet_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#subnet_resource_id MachineLearningComputeInstance#subnet_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#tags MachineLearningComputeInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts">MachineLearningComputeInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `machine_learning_workspace_id`<sup>Required</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.machineLearningWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#machine_learning_workspace_id MachineLearningComputeInstance#machine_learning_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#name MachineLearningComputeInstance#name}.

---

##### `virtual_machine_size`<sup>Required</sup> <a name="virtual_machine_size" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.virtualMachineSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#virtual_machine_size MachineLearningComputeInstance#virtual_machine_size}.

---

##### `assign_to_user`<sup>Optional</sup> <a name="assign_to_user" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.assignToUser"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a>

assign_to_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#assign_to_user MachineLearningComputeInstance#assign_to_user}

---

##### `authorization_type`<sup>Optional</sup> <a name="authorization_type" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.authorizationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#authorization_type MachineLearningComputeInstance#authorization_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#description MachineLearningComputeInstance#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#id MachineLearningComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#identity MachineLearningComputeInstance#identity}

---

##### `local_auth_enabled`<sup>Optional</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.localAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#local_auth_enabled MachineLearningComputeInstance#local_auth_enabled}.

---

##### `node_public_ip_enabled`<sup>Optional</sup> <a name="node_public_ip_enabled" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.nodePublicIpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#node_public_ip_enabled MachineLearningComputeInstance#node_public_ip_enabled}.

---

##### `ssh`<sup>Optional</sup> <a name="ssh" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.ssh"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a>

ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#ssh MachineLearningComputeInstance#ssh}

---

##### `subnet_resource_id`<sup>Optional</sup> <a name="subnet_resource_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.subnetResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#subnet_resource_id MachineLearningComputeInstance#subnet_resource_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#tags MachineLearningComputeInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts">MachineLearningComputeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#timeouts MachineLearningComputeInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putAssignToUser">put_assign_to_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putSsh">put_ssh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetAssignToUser">reset_assign_to_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetAuthorizationType">reset_authorization_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetLocalAuthEnabled">reset_local_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetNodePublicIpEnabled">reset_node_public_ip_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetSsh">reset_ssh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetSubnetResourceId">reset_subnet_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_assign_to_user` <a name="put_assign_to_user" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putAssignToUser"></a>

```python
def put_assign_to_user(
  object_id: str = None,
  tenant_id: str = None
) -> None
```

###### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putAssignToUser.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#object_id MachineLearningComputeInstance#object_id}.

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putAssignToUser.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#tenant_id MachineLearningComputeInstance#tenant_id}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#type MachineLearningComputeInstance#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#identity_ids MachineLearningComputeInstance#identity_ids}.

---

##### `put_ssh` <a name="put_ssh" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putSsh"></a>

```python
def put_ssh(
  public_key: str
) -> None
```

###### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putSsh.parameter.publicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#public_key MachineLearningComputeInstance#public_key}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#create MachineLearningComputeInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#delete MachineLearningComputeInstance#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#read MachineLearningComputeInstance#read}.

---

##### `reset_assign_to_user` <a name="reset_assign_to_user" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetAssignToUser"></a>

```python
def reset_assign_to_user() -> None
```

##### `reset_authorization_type` <a name="reset_authorization_type" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetAuthorizationType"></a>

```python
def reset_authorization_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_local_auth_enabled` <a name="reset_local_auth_enabled" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetLocalAuthEnabled"></a>

```python
def reset_local_auth_enabled() -> None
```

##### `reset_node_public_ip_enabled` <a name="reset_node_public_ip_enabled" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetNodePublicIpEnabled"></a>

```python
def reset_node_public_ip_enabled() -> None
```

##### `reset_ssh` <a name="reset_ssh" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetSsh"></a>

```python
def reset_ssh() -> None
```

##### `reset_subnet_resource_id` <a name="reset_subnet_resource_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetSubnetResourceId"></a>

```python
def reset_subnet_resource_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MachineLearningComputeInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_instance

machineLearningComputeInstance.MachineLearningComputeInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_instance

machineLearningComputeInstance.MachineLearningComputeInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_instance

machineLearningComputeInstance.MachineLearningComputeInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_instance

machineLearningComputeInstance.MachineLearningComputeInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MachineLearningComputeInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MachineLearningComputeInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MachineLearningComputeInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningComputeInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.assignToUser">assign_to_user</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference">MachineLearningComputeInstanceAssignToUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference">MachineLearningComputeInstanceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.ssh">ssh</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference">MachineLearningComputeInstanceSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference">MachineLearningComputeInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.assignToUserInput">assign_to_user_input</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.authorizationTypeInput">authorization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.localAuthEnabledInput">local_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.machineLearningWorkspaceIdInput">machine_learning_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.nodePublicIpEnabledInput">node_public_ip_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.sshInput">ssh_input</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.subnetResourceIdInput">subnet_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts">MachineLearningComputeInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.virtualMachineSizeInput">virtual_machine_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.machineLearningWorkspaceId">machine_learning_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.nodePublicIpEnabled">node_public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.subnetResourceId">subnet_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.virtualMachineSize">virtual_machine_size</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assign_to_user`<sup>Required</sup> <a name="assign_to_user" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.assignToUser"></a>

```python
assign_to_user: MachineLearningComputeInstanceAssignToUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference">MachineLearningComputeInstanceAssignToUserOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.identity"></a>

```python
identity: MachineLearningComputeInstanceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference">MachineLearningComputeInstanceIdentityOutputReference</a>

---

##### `ssh`<sup>Required</sup> <a name="ssh" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.ssh"></a>

```python
ssh: MachineLearningComputeInstanceSshOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference">MachineLearningComputeInstanceSshOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.timeouts"></a>

```python
timeouts: MachineLearningComputeInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference">MachineLearningComputeInstanceTimeoutsOutputReference</a>

---

##### `assign_to_user_input`<sup>Optional</sup> <a name="assign_to_user_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.assignToUserInput"></a>

```python
assign_to_user_input: MachineLearningComputeInstanceAssignToUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a>

---

##### `authorization_type_input`<sup>Optional</sup> <a name="authorization_type_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.authorizationTypeInput"></a>

```python
authorization_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.identityInput"></a>

```python
identity_input: MachineLearningComputeInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_auth_enabled_input`<sup>Optional</sup> <a name="local_auth_enabled_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.localAuthEnabledInput"></a>

```python
local_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `machine_learning_workspace_id_input`<sup>Optional</sup> <a name="machine_learning_workspace_id_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.machineLearningWorkspaceIdInput"></a>

```python
machine_learning_workspace_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_public_ip_enabled_input`<sup>Optional</sup> <a name="node_public_ip_enabled_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.nodePublicIpEnabledInput"></a>

```python
node_public_ip_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssh_input`<sup>Optional</sup> <a name="ssh_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.sshInput"></a>

```python
ssh_input: MachineLearningComputeInstanceSsh
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a>

---

##### `subnet_resource_id_input`<sup>Optional</sup> <a name="subnet_resource_id_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.subnetResourceIdInput"></a>

```python
subnet_resource_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MachineLearningComputeInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts">MachineLearningComputeInstanceTimeouts</a>]

---

##### `virtual_machine_size_input`<sup>Optional</sup> <a name="virtual_machine_size_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.virtualMachineSizeInput"></a>

```python
virtual_machine_size_input: str
```

- *Type:* str

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_auth_enabled`<sup>Required</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.localAuthEnabled"></a>

```python
local_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `machine_learning_workspace_id`<sup>Required</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.machineLearningWorkspaceId"></a>

```python
machine_learning_workspace_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_public_ip_enabled`<sup>Required</sup> <a name="node_public_ip_enabled" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.nodePublicIpEnabled"></a>

```python
node_public_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_resource_id`<sup>Required</sup> <a name="subnet_resource_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.subnetResourceId"></a>

```python
subnet_resource_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_machine_size`<sup>Required</sup> <a name="virtual_machine_size" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.virtualMachineSize"></a>

```python
virtual_machine_size: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningComputeInstanceAssignToUser <a name="MachineLearningComputeInstanceAssignToUser" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_instance

machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser(
  object_id: str = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#object_id MachineLearningComputeInstance#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#tenant_id MachineLearningComputeInstance#tenant_id}. |

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#object_id MachineLearningComputeInstance#object_id}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#tenant_id MachineLearningComputeInstance#tenant_id}.

---

### MachineLearningComputeInstanceConfig <a name="MachineLearningComputeInstanceConfig" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_instance

machineLearningComputeInstance.MachineLearningComputeInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  machine_learning_workspace_id: str,
  name: str,
  virtual_machine_size: str,
  assign_to_user: MachineLearningComputeInstanceAssignToUser = None,
  authorization_type: str = None,
  description: str = None,
  id: str = None,
  identity: MachineLearningComputeInstanceIdentity = None,
  local_auth_enabled: typing.Union[bool, IResolvable] = None,
  node_public_ip_enabled: typing.Union[bool, IResolvable] = None,
  ssh: MachineLearningComputeInstanceSsh = None,
  subnet_resource_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MachineLearningComputeInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.machineLearningWorkspaceId">machine_learning_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#machine_learning_workspace_id MachineLearningComputeInstance#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#name MachineLearningComputeInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.virtualMachineSize">virtual_machine_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#virtual_machine_size MachineLearningComputeInstance#virtual_machine_size}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.assignToUser">assign_to_user</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a></code> | assign_to_user block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.authorizationType">authorization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#authorization_type MachineLearningComputeInstance#authorization_type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#description MachineLearningComputeInstance#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#id MachineLearningComputeInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#local_auth_enabled MachineLearningComputeInstance#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.nodePublicIpEnabled">node_public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#node_public_ip_enabled MachineLearningComputeInstance#node_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.ssh">ssh</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a></code> | ssh block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.subnetResourceId">subnet_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#subnet_resource_id MachineLearningComputeInstance#subnet_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#tags MachineLearningComputeInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts">MachineLearningComputeInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `machine_learning_workspace_id`<sup>Required</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.machineLearningWorkspaceId"></a>

```python
machine_learning_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#machine_learning_workspace_id MachineLearningComputeInstance#machine_learning_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#name MachineLearningComputeInstance#name}.

---

##### `virtual_machine_size`<sup>Required</sup> <a name="virtual_machine_size" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.virtualMachineSize"></a>

```python
virtual_machine_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#virtual_machine_size MachineLearningComputeInstance#virtual_machine_size}.

---

##### `assign_to_user`<sup>Optional</sup> <a name="assign_to_user" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.assignToUser"></a>

```python
assign_to_user: MachineLearningComputeInstanceAssignToUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a>

assign_to_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#assign_to_user MachineLearningComputeInstance#assign_to_user}

---

##### `authorization_type`<sup>Optional</sup> <a name="authorization_type" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#authorization_type MachineLearningComputeInstance#authorization_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#description MachineLearningComputeInstance#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#id MachineLearningComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.identity"></a>

```python
identity: MachineLearningComputeInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#identity MachineLearningComputeInstance#identity}

---

##### `local_auth_enabled`<sup>Optional</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.localAuthEnabled"></a>

```python
local_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#local_auth_enabled MachineLearningComputeInstance#local_auth_enabled}.

---

##### `node_public_ip_enabled`<sup>Optional</sup> <a name="node_public_ip_enabled" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.nodePublicIpEnabled"></a>

```python
node_public_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#node_public_ip_enabled MachineLearningComputeInstance#node_public_ip_enabled}.

---

##### `ssh`<sup>Optional</sup> <a name="ssh" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.ssh"></a>

```python
ssh: MachineLearningComputeInstanceSsh
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a>

ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#ssh MachineLearningComputeInstance#ssh}

---

##### `subnet_resource_id`<sup>Optional</sup> <a name="subnet_resource_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.subnetResourceId"></a>

```python
subnet_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#subnet_resource_id MachineLearningComputeInstance#subnet_resource_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#tags MachineLearningComputeInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.timeouts"></a>

```python
timeouts: MachineLearningComputeInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts">MachineLearningComputeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#timeouts MachineLearningComputeInstance#timeouts}

---

### MachineLearningComputeInstanceIdentity <a name="MachineLearningComputeInstanceIdentity" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_instance

machineLearningComputeInstance.MachineLearningComputeInstanceIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#type MachineLearningComputeInstance#type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#identity_ids MachineLearningComputeInstance#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#type MachineLearningComputeInstance#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#identity_ids MachineLearningComputeInstance#identity_ids}.

---

### MachineLearningComputeInstanceSsh <a name="MachineLearningComputeInstanceSsh" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_instance

machineLearningComputeInstance.MachineLearningComputeInstanceSsh(
  public_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh.property.publicKey">public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#public_key MachineLearningComputeInstance#public_key}. |

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#public_key MachineLearningComputeInstance#public_key}.

---

### MachineLearningComputeInstanceTimeouts <a name="MachineLearningComputeInstanceTimeouts" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_instance

machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#create MachineLearningComputeInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#delete MachineLearningComputeInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#read MachineLearningComputeInstance#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#create MachineLearningComputeInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#delete MachineLearningComputeInstance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/machine_learning_compute_instance#read MachineLearningComputeInstance#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningComputeInstanceAssignToUserOutputReference <a name="MachineLearningComputeInstanceAssignToUserOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_instance

machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.resetObjectId">reset_object_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_object_id` <a name="reset_object_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.resetObjectId"></a>

```python
def reset_object_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.internalValue"></a>

```python
internal_value: MachineLearningComputeInstanceAssignToUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a>

---


### MachineLearningComputeInstanceIdentityOutputReference <a name="MachineLearningComputeInstanceIdentityOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_instance

machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.internalValue"></a>

```python
internal_value: MachineLearningComputeInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a>

---


### MachineLearningComputeInstanceSshOutputReference <a name="MachineLearningComputeInstanceSshOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_instance

machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.internalValue"></a>

```python
internal_value: MachineLearningComputeInstanceSsh
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a>

---


### MachineLearningComputeInstanceTimeoutsOutputReference <a name="MachineLearningComputeInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_compute_instance

machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts">MachineLearningComputeInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MachineLearningComputeInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts">MachineLearningComputeInstanceTimeouts</a>]

---



