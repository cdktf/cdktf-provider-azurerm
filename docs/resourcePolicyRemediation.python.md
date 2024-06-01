# `resourcePolicyRemediation` Submodule <a name="`resourcePolicyRemediation` Submodule" id="@cdktf/provider-azurerm.resourcePolicyRemediation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcePolicyRemediation <a name="ResourcePolicyRemediation" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation azurerm_resource_policy_remediation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_remediation

resourcePolicyRemediation.ResourcePolicyRemediation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  policy_assignment_id: str,
  resource_id: str,
  failure_percentage: typing.Union[int, float] = None,
  id: str = None,
  location_filters: typing.List[str] = None,
  parallel_deployments: typing.Union[int, float] = None,
  policy_definition_id: str = None,
  policy_definition_reference_id: str = None,
  resource_count: typing.Union[int, float] = None,
  resource_discovery_mode: str = None,
  timeouts: ResourcePolicyRemediationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#name ResourcePolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#policy_assignment_id ResourcePolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#resource_id ResourcePolicyRemediation#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.failurePercentage">failure_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#failure_percentage ResourcePolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#id ResourcePolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.locationFilters">location_filters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#location_filters ResourcePolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.parallelDeployments">parallel_deployments</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#parallel_deployments ResourcePolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#policy_definition_id ResourcePolicyRemediation#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.policyDefinitionReferenceId">policy_definition_reference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#policy_definition_reference_id ResourcePolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.resourceCount">resource_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#resource_count ResourcePolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.resourceDiscoveryMode">resource_discovery_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#resource_discovery_mode ResourcePolicyRemediation#resource_discovery_mode}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#name ResourcePolicyRemediation#name}.

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.policyAssignmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#policy_assignment_id ResourcePolicyRemediation#policy_assignment_id}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#resource_id ResourcePolicyRemediation#resource_id}.

---

##### `failure_percentage`<sup>Optional</sup> <a name="failure_percentage" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.failurePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#failure_percentage ResourcePolicyRemediation#failure_percentage}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#id ResourcePolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_filters`<sup>Optional</sup> <a name="location_filters" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.locationFilters"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#location_filters ResourcePolicyRemediation#location_filters}.

---

##### `parallel_deployments`<sup>Optional</sup> <a name="parallel_deployments" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.parallelDeployments"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#parallel_deployments ResourcePolicyRemediation#parallel_deployments}.

---

##### `policy_definition_id`<sup>Optional</sup> <a name="policy_definition_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.policyDefinitionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#policy_definition_id ResourcePolicyRemediation#policy_definition_id}.

---

##### `policy_definition_reference_id`<sup>Optional</sup> <a name="policy_definition_reference_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.policyDefinitionReferenceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#policy_definition_reference_id ResourcePolicyRemediation#policy_definition_reference_id}.

---

##### `resource_count`<sup>Optional</sup> <a name="resource_count" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.resourceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#resource_count ResourcePolicyRemediation#resource_count}.

---

##### `resource_discovery_mode`<sup>Optional</sup> <a name="resource_discovery_mode" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.resourceDiscoveryMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#resource_discovery_mode ResourcePolicyRemediation#resource_discovery_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#timeouts ResourcePolicyRemediation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetFailurePercentage">reset_failure_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetLocationFilters">reset_location_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetParallelDeployments">reset_parallel_deployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetPolicyDefinitionId">reset_policy_definition_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetPolicyDefinitionReferenceId">reset_policy_definition_reference_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetResourceCount">reset_resource_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetResourceDiscoveryMode">reset_resource_discovery_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#create ResourcePolicyRemediation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#delete ResourcePolicyRemediation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#read ResourcePolicyRemediation#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#update ResourcePolicyRemediation#update}.

---

##### `reset_failure_percentage` <a name="reset_failure_percentage" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetFailurePercentage"></a>

```python
def reset_failure_percentage() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location_filters` <a name="reset_location_filters" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetLocationFilters"></a>

```python
def reset_location_filters() -> None
```

##### `reset_parallel_deployments` <a name="reset_parallel_deployments" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetParallelDeployments"></a>

```python
def reset_parallel_deployments() -> None
```

##### `reset_policy_definition_id` <a name="reset_policy_definition_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetPolicyDefinitionId"></a>

```python
def reset_policy_definition_id() -> None
```

##### `reset_policy_definition_reference_id` <a name="reset_policy_definition_reference_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetPolicyDefinitionReferenceId"></a>

```python
def reset_policy_definition_reference_id() -> None
```

##### `reset_resource_count` <a name="reset_resource_count" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetResourceCount"></a>

```python
def reset_resource_count() -> None
```

##### `reset_resource_discovery_mode` <a name="reset_resource_discovery_mode" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetResourceDiscoveryMode"></a>

```python
def reset_resource_discovery_mode() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ResourcePolicyRemediation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_remediation

resourcePolicyRemediation.ResourcePolicyRemediation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_remediation

resourcePolicyRemediation.ResourcePolicyRemediation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_remediation

resourcePolicyRemediation.ResourcePolicyRemediation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_remediation

resourcePolicyRemediation.ResourcePolicyRemediation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ResourcePolicyRemediation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourcePolicyRemediation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourcePolicyRemediation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourcePolicyRemediation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference">ResourcePolicyRemediationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.failurePercentageInput">failure_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.locationFiltersInput">location_filters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.parallelDeploymentsInput">parallel_deployments_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyAssignmentIdInput">policy_assignment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionIdInput">policy_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionReferenceIdInput">policy_definition_reference_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceCountInput">resource_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceDiscoveryModeInput">resource_discovery_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.failurePercentage">failure_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.locationFilters">location_filters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.parallelDeployments">parallel_deployments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionReferenceId">policy_definition_reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceCount">resource_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceDiscoveryMode">resource_discovery_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.timeouts"></a>

```python
timeouts: ResourcePolicyRemediationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference">ResourcePolicyRemediationTimeoutsOutputReference</a>

---

##### `failure_percentage_input`<sup>Optional</sup> <a name="failure_percentage_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.failurePercentageInput"></a>

```python
failure_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_filters_input`<sup>Optional</sup> <a name="location_filters_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.locationFiltersInput"></a>

```python
location_filters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parallel_deployments_input`<sup>Optional</sup> <a name="parallel_deployments_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.parallelDeploymentsInput"></a>

```python
parallel_deployments_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_assignment_id_input`<sup>Optional</sup> <a name="policy_assignment_id_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyAssignmentIdInput"></a>

```python
policy_assignment_id_input: str
```

- *Type:* str

---

##### `policy_definition_id_input`<sup>Optional</sup> <a name="policy_definition_id_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionIdInput"></a>

```python
policy_definition_id_input: str
```

- *Type:* str

---

##### `policy_definition_reference_id_input`<sup>Optional</sup> <a name="policy_definition_reference_id_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionReferenceIdInput"></a>

```python
policy_definition_reference_id_input: str
```

- *Type:* str

---

##### `resource_count_input`<sup>Optional</sup> <a name="resource_count_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceCountInput"></a>

```python
resource_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_discovery_mode_input`<sup>Optional</sup> <a name="resource_discovery_mode_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceDiscoveryModeInput"></a>

```python
resource_discovery_mode_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ResourcePolicyRemediationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a>]

---

##### `failure_percentage`<sup>Required</sup> <a name="failure_percentage" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.failurePercentage"></a>

```python
failure_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_filters`<sup>Required</sup> <a name="location_filters" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.locationFilters"></a>

```python
location_filters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parallel_deployments`<sup>Required</sup> <a name="parallel_deployments" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.parallelDeployments"></a>

```python
parallel_deployments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyAssignmentId"></a>

```python
policy_assignment_id: str
```

- *Type:* str

---

##### `policy_definition_id`<sup>Required</sup> <a name="policy_definition_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionId"></a>

```python
policy_definition_id: str
```

- *Type:* str

---

##### `policy_definition_reference_id`<sup>Required</sup> <a name="policy_definition_reference_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionReferenceId"></a>

```python
policy_definition_reference_id: str
```

- *Type:* str

---

##### `resource_count`<sup>Required</sup> <a name="resource_count" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceCount"></a>

```python
resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_discovery_mode`<sup>Required</sup> <a name="resource_discovery_mode" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceDiscoveryMode"></a>

```python
resource_discovery_mode: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcePolicyRemediationConfig <a name="ResourcePolicyRemediationConfig" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_remediation

resourcePolicyRemediation.ResourcePolicyRemediationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  policy_assignment_id: str,
  resource_id: str,
  failure_percentage: typing.Union[int, float] = None,
  id: str = None,
  location_filters: typing.List[str] = None,
  parallel_deployments: typing.Union[int, float] = None,
  policy_definition_id: str = None,
  policy_definition_reference_id: str = None,
  resource_count: typing.Union[int, float] = None,
  resource_discovery_mode: str = None,
  timeouts: ResourcePolicyRemediationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#name ResourcePolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#policy_assignment_id ResourcePolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#resource_id ResourcePolicyRemediation#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.failurePercentage">failure_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#failure_percentage ResourcePolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#id ResourcePolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.locationFilters">location_filters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#location_filters ResourcePolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.parallelDeployments">parallel_deployments</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#parallel_deployments ResourcePolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#policy_definition_id ResourcePolicyRemediation#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyDefinitionReferenceId">policy_definition_reference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#policy_definition_reference_id ResourcePolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceCount">resource_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#resource_count ResourcePolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceDiscoveryMode">resource_discovery_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#resource_discovery_mode ResourcePolicyRemediation#resource_discovery_mode}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#name ResourcePolicyRemediation#name}.

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyAssignmentId"></a>

```python
policy_assignment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#policy_assignment_id ResourcePolicyRemediation#policy_assignment_id}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#resource_id ResourcePolicyRemediation#resource_id}.

---

##### `failure_percentage`<sup>Optional</sup> <a name="failure_percentage" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.failurePercentage"></a>

```python
failure_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#failure_percentage ResourcePolicyRemediation#failure_percentage}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#id ResourcePolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_filters`<sup>Optional</sup> <a name="location_filters" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.locationFilters"></a>

```python
location_filters: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#location_filters ResourcePolicyRemediation#location_filters}.

---

##### `parallel_deployments`<sup>Optional</sup> <a name="parallel_deployments" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.parallelDeployments"></a>

```python
parallel_deployments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#parallel_deployments ResourcePolicyRemediation#parallel_deployments}.

---

##### `policy_definition_id`<sup>Optional</sup> <a name="policy_definition_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyDefinitionId"></a>

```python
policy_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#policy_definition_id ResourcePolicyRemediation#policy_definition_id}.

---

##### `policy_definition_reference_id`<sup>Optional</sup> <a name="policy_definition_reference_id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyDefinitionReferenceId"></a>

```python
policy_definition_reference_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#policy_definition_reference_id ResourcePolicyRemediation#policy_definition_reference_id}.

---

##### `resource_count`<sup>Optional</sup> <a name="resource_count" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceCount"></a>

```python
resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#resource_count ResourcePolicyRemediation#resource_count}.

---

##### `resource_discovery_mode`<sup>Optional</sup> <a name="resource_discovery_mode" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceDiscoveryMode"></a>

```python
resource_discovery_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#resource_discovery_mode ResourcePolicyRemediation#resource_discovery_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.timeouts"></a>

```python
timeouts: ResourcePolicyRemediationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#timeouts ResourcePolicyRemediation#timeouts}

---

### ResourcePolicyRemediationTimeouts <a name="ResourcePolicyRemediationTimeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_remediation

resourcePolicyRemediation.ResourcePolicyRemediationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#create ResourcePolicyRemediation#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#delete ResourcePolicyRemediation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#read ResourcePolicyRemediation#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#update ResourcePolicyRemediation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#create ResourcePolicyRemediation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#delete ResourcePolicyRemediation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#read ResourcePolicyRemediation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/resource_policy_remediation#update ResourcePolicyRemediation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcePolicyRemediationTimeoutsOutputReference <a name="ResourcePolicyRemediationTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_remediation

resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourcePolicyRemediationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a>]

---



