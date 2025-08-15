# `machineLearningSynapseSpark` Submodule <a name="`machineLearningSynapseSpark` Submodule" id="@cdktf/provider-azurerm.machineLearningSynapseSpark"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningSynapseSpark <a name="MachineLearningSynapseSpark" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark azurerm_machine_learning_synapse_spark}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_synapse_spark

machineLearningSynapseSpark.MachineLearningSynapseSpark(
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
  synapse_spark_pool_id: str,
  description: str = None,
  id: str = None,
  identity: MachineLearningSynapseSparkIdentity = None,
  local_auth_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MachineLearningSynapseSparkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#location MachineLearningSynapseSpark#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.machineLearningWorkspaceId">machine_learning_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#machine_learning_workspace_id MachineLearningSynapseSpark#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#name MachineLearningSynapseSpark#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.synapseSparkPoolId">synapse_spark_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#synapse_spark_pool_id MachineLearningSynapseSpark#synapse_spark_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#description MachineLearningSynapseSpark#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#id MachineLearningSynapseSpark#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#local_auth_enabled MachineLearningSynapseSpark#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#tags MachineLearningSynapseSpark#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#location MachineLearningSynapseSpark#location}.

---

##### `machine_learning_workspace_id`<sup>Required</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.machineLearningWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#machine_learning_workspace_id MachineLearningSynapseSpark#machine_learning_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#name MachineLearningSynapseSpark#name}.

---

##### `synapse_spark_pool_id`<sup>Required</sup> <a name="synapse_spark_pool_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.synapseSparkPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#synapse_spark_pool_id MachineLearningSynapseSpark#synapse_spark_pool_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#description MachineLearningSynapseSpark#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#id MachineLearningSynapseSpark#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#identity MachineLearningSynapseSpark#identity}

---

##### `local_auth_enabled`<sup>Optional</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.localAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#local_auth_enabled MachineLearningSynapseSpark#local_auth_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#tags MachineLearningSynapseSpark#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#timeouts MachineLearningSynapseSpark#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetLocalAuthEnabled">reset_local_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#type MachineLearningSynapseSpark#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#identity_ids MachineLearningSynapseSpark#identity_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#create MachineLearningSynapseSpark#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#delete MachineLearningSynapseSpark#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#read MachineLearningSynapseSpark#read}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_local_auth_enabled` <a name="reset_local_auth_enabled" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetLocalAuthEnabled"></a>

```python
def reset_local_auth_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MachineLearningSynapseSpark resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_synapse_spark

machineLearningSynapseSpark.MachineLearningSynapseSpark.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_synapse_spark

machineLearningSynapseSpark.MachineLearningSynapseSpark.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_synapse_spark

machineLearningSynapseSpark.MachineLearningSynapseSpark.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_synapse_spark

machineLearningSynapseSpark.MachineLearningSynapseSpark.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MachineLearningSynapseSpark resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MachineLearningSynapseSpark to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MachineLearningSynapseSpark that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningSynapseSpark to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference">MachineLearningSynapseSparkIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference">MachineLearningSynapseSparkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabledInput">local_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceIdInput">machine_learning_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolIdInput">synapse_spark_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceId">machine_learning_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolId">synapse_spark_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identity"></a>

```python
identity: MachineLearningSynapseSparkIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference">MachineLearningSynapseSparkIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeouts"></a>

```python
timeouts: MachineLearningSynapseSparkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference">MachineLearningSynapseSparkTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identityInput"></a>

```python
identity_input: MachineLearningSynapseSparkIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_auth_enabled_input`<sup>Optional</sup> <a name="local_auth_enabled_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabledInput"></a>

```python
local_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `machine_learning_workspace_id_input`<sup>Optional</sup> <a name="machine_learning_workspace_id_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceIdInput"></a>

```python
machine_learning_workspace_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `synapse_spark_pool_id_input`<sup>Optional</sup> <a name="synapse_spark_pool_id_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolIdInput"></a>

```python
synapse_spark_pool_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MachineLearningSynapseSparkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_auth_enabled`<sup>Required</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabled"></a>

```python
local_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `machine_learning_workspace_id`<sup>Required</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceId"></a>

```python
machine_learning_workspace_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `synapse_spark_pool_id`<sup>Required</sup> <a name="synapse_spark_pool_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolId"></a>

```python
synapse_spark_pool_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningSynapseSparkConfig <a name="MachineLearningSynapseSparkConfig" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_synapse_spark

machineLearningSynapseSpark.MachineLearningSynapseSparkConfig(
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
  synapse_spark_pool_id: str,
  description: str = None,
  id: str = None,
  identity: MachineLearningSynapseSparkIdentity = None,
  local_auth_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MachineLearningSynapseSparkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#location MachineLearningSynapseSpark#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.machineLearningWorkspaceId">machine_learning_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#machine_learning_workspace_id MachineLearningSynapseSpark#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#name MachineLearningSynapseSpark#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.synapseSparkPoolId">synapse_spark_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#synapse_spark_pool_id MachineLearningSynapseSpark#synapse_spark_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#description MachineLearningSynapseSpark#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#id MachineLearningSynapseSpark#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.localAuthEnabled">local_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#local_auth_enabled MachineLearningSynapseSpark#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#tags MachineLearningSynapseSpark#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#location MachineLearningSynapseSpark#location}.

---

##### `machine_learning_workspace_id`<sup>Required</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.machineLearningWorkspaceId"></a>

```python
machine_learning_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#machine_learning_workspace_id MachineLearningSynapseSpark#machine_learning_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#name MachineLearningSynapseSpark#name}.

---

##### `synapse_spark_pool_id`<sup>Required</sup> <a name="synapse_spark_pool_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.synapseSparkPoolId"></a>

```python
synapse_spark_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#synapse_spark_pool_id MachineLearningSynapseSpark#synapse_spark_pool_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#description MachineLearningSynapseSpark#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#id MachineLearningSynapseSpark#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.identity"></a>

```python
identity: MachineLearningSynapseSparkIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#identity MachineLearningSynapseSpark#identity}

---

##### `local_auth_enabled`<sup>Optional</sup> <a name="local_auth_enabled" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.localAuthEnabled"></a>

```python
local_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#local_auth_enabled MachineLearningSynapseSpark#local_auth_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#tags MachineLearningSynapseSpark#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.timeouts"></a>

```python
timeouts: MachineLearningSynapseSparkTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#timeouts MachineLearningSynapseSpark#timeouts}

---

### MachineLearningSynapseSparkIdentity <a name="MachineLearningSynapseSparkIdentity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_synapse_spark

machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#type MachineLearningSynapseSpark#type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#identity_ids MachineLearningSynapseSpark#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#type MachineLearningSynapseSpark#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#identity_ids MachineLearningSynapseSpark#identity_ids}.

---

### MachineLearningSynapseSparkTimeouts <a name="MachineLearningSynapseSparkTimeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_synapse_spark

machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#create MachineLearningSynapseSpark#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#delete MachineLearningSynapseSpark#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#read MachineLearningSynapseSpark#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#create MachineLearningSynapseSpark#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#delete MachineLearningSynapseSpark#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/machine_learning_synapse_spark#read MachineLearningSynapseSpark#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningSynapseSparkIdentityOutputReference <a name="MachineLearningSynapseSparkIdentityOutputReference" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_synapse_spark

machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.internalValue"></a>

```python
internal_value: MachineLearningSynapseSparkIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

---


### MachineLearningSynapseSparkTimeoutsOutputReference <a name="MachineLearningSynapseSparkTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_synapse_spark

machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MachineLearningSynapseSparkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a>]

---



