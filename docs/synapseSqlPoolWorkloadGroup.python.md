# `synapseSqlPoolWorkloadGroup` Submodule <a name="`synapseSqlPoolWorkloadGroup` Submodule" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseSqlPoolWorkloadGroup <a name="SynapseSqlPoolWorkloadGroup" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group azurerm_synapse_sql_pool_workload_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_workload_group

synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  max_resource_percent: typing.Union[int, float],
  min_resource_percent: typing.Union[int, float],
  name: str,
  sql_pool_id: str,
  id: str = None,
  importance: str = None,
  max_resource_percent_per_request: typing.Union[int, float] = None,
  min_resource_percent_per_request: typing.Union[int, float] = None,
  query_execution_timeout_in_seconds: typing.Union[int, float] = None,
  timeouts: SynapseSqlPoolWorkloadGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.maxResourcePercent">max_resource_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#max_resource_percent SynapseSqlPoolWorkloadGroup#max_resource_percent}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.minResourcePercent">min_resource_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#min_resource_percent SynapseSqlPoolWorkloadGroup#min_resource_percent}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#name SynapseSqlPoolWorkloadGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.sqlPoolId">sql_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#sql_pool_id SynapseSqlPoolWorkloadGroup#sql_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#id SynapseSqlPoolWorkloadGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.importance">importance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#importance SynapseSqlPoolWorkloadGroup#importance}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.maxResourcePercentPerRequest">max_resource_percent_per_request</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#max_resource_percent_per_request SynapseSqlPoolWorkloadGroup#max_resource_percent_per_request}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.minResourcePercentPerRequest">min_resource_percent_per_request</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#min_resource_percent_per_request SynapseSqlPoolWorkloadGroup#min_resource_percent_per_request}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.queryExecutionTimeoutInSeconds">query_execution_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#query_execution_timeout_in_seconds SynapseSqlPoolWorkloadGroup#query_execution_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts">SynapseSqlPoolWorkloadGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `max_resource_percent`<sup>Required</sup> <a name="max_resource_percent" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.maxResourcePercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#max_resource_percent SynapseSqlPoolWorkloadGroup#max_resource_percent}.

---

##### `min_resource_percent`<sup>Required</sup> <a name="min_resource_percent" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.minResourcePercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#min_resource_percent SynapseSqlPoolWorkloadGroup#min_resource_percent}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#name SynapseSqlPoolWorkloadGroup#name}.

---

##### `sql_pool_id`<sup>Required</sup> <a name="sql_pool_id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.sqlPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#sql_pool_id SynapseSqlPoolWorkloadGroup#sql_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#id SynapseSqlPoolWorkloadGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importance`<sup>Optional</sup> <a name="importance" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.importance"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#importance SynapseSqlPoolWorkloadGroup#importance}.

---

##### `max_resource_percent_per_request`<sup>Optional</sup> <a name="max_resource_percent_per_request" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.maxResourcePercentPerRequest"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#max_resource_percent_per_request SynapseSqlPoolWorkloadGroup#max_resource_percent_per_request}.

---

##### `min_resource_percent_per_request`<sup>Optional</sup> <a name="min_resource_percent_per_request" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.minResourcePercentPerRequest"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#min_resource_percent_per_request SynapseSqlPoolWorkloadGroup#min_resource_percent_per_request}.

---

##### `query_execution_timeout_in_seconds`<sup>Optional</sup> <a name="query_execution_timeout_in_seconds" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.queryExecutionTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#query_execution_timeout_in_seconds SynapseSqlPoolWorkloadGroup#query_execution_timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts">SynapseSqlPoolWorkloadGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#timeouts SynapseSqlPoolWorkloadGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetImportance">reset_importance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetMaxResourcePercentPerRequest">reset_max_resource_percent_per_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetMinResourcePercentPerRequest">reset_min_resource_percent_per_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetQueryExecutionTimeoutInSeconds">reset_query_execution_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#create SynapseSqlPoolWorkloadGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#delete SynapseSqlPoolWorkloadGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#read SynapseSqlPoolWorkloadGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#update SynapseSqlPoolWorkloadGroup#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_importance` <a name="reset_importance" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetImportance"></a>

```python
def reset_importance() -> None
```

##### `reset_max_resource_percent_per_request` <a name="reset_max_resource_percent_per_request" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetMaxResourcePercentPerRequest"></a>

```python
def reset_max_resource_percent_per_request() -> None
```

##### `reset_min_resource_percent_per_request` <a name="reset_min_resource_percent_per_request" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetMinResourcePercentPerRequest"></a>

```python
def reset_min_resource_percent_per_request() -> None
```

##### `reset_query_execution_timeout_in_seconds` <a name="reset_query_execution_timeout_in_seconds" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetQueryExecutionTimeoutInSeconds"></a>

```python
def reset_query_execution_timeout_in_seconds() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SynapseSqlPoolWorkloadGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_workload_group

synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_workload_group

synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_workload_group

synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_workload_group

synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SynapseSqlPoolWorkloadGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SynapseSqlPoolWorkloadGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SynapseSqlPoolWorkloadGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SynapseSqlPoolWorkloadGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference">SynapseSqlPoolWorkloadGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.importanceInput">importance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercentInput">max_resource_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercentPerRequestInput">max_resource_percent_per_request_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercentInput">min_resource_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercentPerRequestInput">min_resource_percent_per_request_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.queryExecutionTimeoutInSecondsInput">query_execution_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.sqlPoolIdInput">sql_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts">SynapseSqlPoolWorkloadGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.importance">importance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercent">max_resource_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercentPerRequest">max_resource_percent_per_request</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercent">min_resource_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercentPerRequest">min_resource_percent_per_request</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.queryExecutionTimeoutInSeconds">query_execution_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.sqlPoolId">sql_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.timeouts"></a>

```python
timeouts: SynapseSqlPoolWorkloadGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference">SynapseSqlPoolWorkloadGroupTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `importance_input`<sup>Optional</sup> <a name="importance_input" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.importanceInput"></a>

```python
importance_input: str
```

- *Type:* str

---

##### `max_resource_percent_input`<sup>Optional</sup> <a name="max_resource_percent_input" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercentInput"></a>

```python
max_resource_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_resource_percent_per_request_input`<sup>Optional</sup> <a name="max_resource_percent_per_request_input" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercentPerRequestInput"></a>

```python
max_resource_percent_per_request_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_resource_percent_input`<sup>Optional</sup> <a name="min_resource_percent_input" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercentInput"></a>

```python
min_resource_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_resource_percent_per_request_input`<sup>Optional</sup> <a name="min_resource_percent_per_request_input" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercentPerRequestInput"></a>

```python
min_resource_percent_per_request_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_execution_timeout_in_seconds_input`<sup>Optional</sup> <a name="query_execution_timeout_in_seconds_input" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.queryExecutionTimeoutInSecondsInput"></a>

```python
query_execution_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_pool_id_input`<sup>Optional</sup> <a name="sql_pool_id_input" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.sqlPoolIdInput"></a>

```python
sql_pool_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SynapseSqlPoolWorkloadGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts">SynapseSqlPoolWorkloadGroupTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `importance`<sup>Required</sup> <a name="importance" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.importance"></a>

```python
importance: str
```

- *Type:* str

---

##### `max_resource_percent`<sup>Required</sup> <a name="max_resource_percent" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercent"></a>

```python
max_resource_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_resource_percent_per_request`<sup>Required</sup> <a name="max_resource_percent_per_request" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.maxResourcePercentPerRequest"></a>

```python
max_resource_percent_per_request: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_resource_percent`<sup>Required</sup> <a name="min_resource_percent" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercent"></a>

```python
min_resource_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_resource_percent_per_request`<sup>Required</sup> <a name="min_resource_percent_per_request" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.minResourcePercentPerRequest"></a>

```python
min_resource_percent_per_request: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_execution_timeout_in_seconds`<sup>Required</sup> <a name="query_execution_timeout_in_seconds" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.queryExecutionTimeoutInSeconds"></a>

```python
query_execution_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_pool_id`<sup>Required</sup> <a name="sql_pool_id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.sqlPoolId"></a>

```python
sql_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseSqlPoolWorkloadGroupConfig <a name="SynapseSqlPoolWorkloadGroupConfig" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_workload_group

synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  max_resource_percent: typing.Union[int, float],
  min_resource_percent: typing.Union[int, float],
  name: str,
  sql_pool_id: str,
  id: str = None,
  importance: str = None,
  max_resource_percent_per_request: typing.Union[int, float] = None,
  min_resource_percent_per_request: typing.Union[int, float] = None,
  query_execution_timeout_in_seconds: typing.Union[int, float] = None,
  timeouts: SynapseSqlPoolWorkloadGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.maxResourcePercent">max_resource_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#max_resource_percent SynapseSqlPoolWorkloadGroup#max_resource_percent}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.minResourcePercent">min_resource_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#min_resource_percent SynapseSqlPoolWorkloadGroup#min_resource_percent}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#name SynapseSqlPoolWorkloadGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.sqlPoolId">sql_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#sql_pool_id SynapseSqlPoolWorkloadGroup#sql_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#id SynapseSqlPoolWorkloadGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.importance">importance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#importance SynapseSqlPoolWorkloadGroup#importance}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.maxResourcePercentPerRequest">max_resource_percent_per_request</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#max_resource_percent_per_request SynapseSqlPoolWorkloadGroup#max_resource_percent_per_request}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.minResourcePercentPerRequest">min_resource_percent_per_request</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#min_resource_percent_per_request SynapseSqlPoolWorkloadGroup#min_resource_percent_per_request}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.queryExecutionTimeoutInSeconds">query_execution_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#query_execution_timeout_in_seconds SynapseSqlPoolWorkloadGroup#query_execution_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts">SynapseSqlPoolWorkloadGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `max_resource_percent`<sup>Required</sup> <a name="max_resource_percent" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.maxResourcePercent"></a>

```python
max_resource_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#max_resource_percent SynapseSqlPoolWorkloadGroup#max_resource_percent}.

---

##### `min_resource_percent`<sup>Required</sup> <a name="min_resource_percent" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.minResourcePercent"></a>

```python
min_resource_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#min_resource_percent SynapseSqlPoolWorkloadGroup#min_resource_percent}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#name SynapseSqlPoolWorkloadGroup#name}.

---

##### `sql_pool_id`<sup>Required</sup> <a name="sql_pool_id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.sqlPoolId"></a>

```python
sql_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#sql_pool_id SynapseSqlPoolWorkloadGroup#sql_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#id SynapseSqlPoolWorkloadGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importance`<sup>Optional</sup> <a name="importance" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.importance"></a>

```python
importance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#importance SynapseSqlPoolWorkloadGroup#importance}.

---

##### `max_resource_percent_per_request`<sup>Optional</sup> <a name="max_resource_percent_per_request" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.maxResourcePercentPerRequest"></a>

```python
max_resource_percent_per_request: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#max_resource_percent_per_request SynapseSqlPoolWorkloadGroup#max_resource_percent_per_request}.

---

##### `min_resource_percent_per_request`<sup>Optional</sup> <a name="min_resource_percent_per_request" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.minResourcePercentPerRequest"></a>

```python
min_resource_percent_per_request: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#min_resource_percent_per_request SynapseSqlPoolWorkloadGroup#min_resource_percent_per_request}.

---

##### `query_execution_timeout_in_seconds`<sup>Optional</sup> <a name="query_execution_timeout_in_seconds" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.queryExecutionTimeoutInSeconds"></a>

```python
query_execution_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#query_execution_timeout_in_seconds SynapseSqlPoolWorkloadGroup#query_execution_timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupConfig.property.timeouts"></a>

```python
timeouts: SynapseSqlPoolWorkloadGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts">SynapseSqlPoolWorkloadGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#timeouts SynapseSqlPoolWorkloadGroup#timeouts}

---

### SynapseSqlPoolWorkloadGroupTimeouts <a name="SynapseSqlPoolWorkloadGroupTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_workload_group

synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#create SynapseSqlPoolWorkloadGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#delete SynapseSqlPoolWorkloadGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#read SynapseSqlPoolWorkloadGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#update SynapseSqlPoolWorkloadGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#create SynapseSqlPoolWorkloadGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#delete SynapseSqlPoolWorkloadGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#read SynapseSqlPoolWorkloadGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/synapse_sql_pool_workload_group#update SynapseSqlPoolWorkloadGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseSqlPoolWorkloadGroupTimeoutsOutputReference <a name="SynapseSqlPoolWorkloadGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_sql_pool_workload_group

synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts">SynapseSqlPoolWorkloadGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SynapseSqlPoolWorkloadGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseSqlPoolWorkloadGroup.SynapseSqlPoolWorkloadGroupTimeouts">SynapseSqlPoolWorkloadGroupTimeouts</a>]

---



