# `resourceGroupPolicyRemediation` Submodule <a name="`resourceGroupPolicyRemediation` Submodule" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupPolicyRemediation <a name="ResourceGroupPolicyRemediation" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation azurerm_resource_group_policy_remediation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_policy_remediation

resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation(
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
  resource_group_id: str,
  failure_percentage: typing.Union[int, float] = None,
  id: str = None,
  location_filters: typing.List[str] = None,
  parallel_deployments: typing.Union[int, float] = None,
  policy_definition_reference_id: str = None,
  resource_count: typing.Union[int, float] = None,
  resource_discovery_mode: str = None,
  timeouts: ResourceGroupPolicyRemediationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#name ResourceGroupPolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#policy_assignment_id ResourceGroupPolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.resourceGroupId">resource_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#resource_group_id ResourceGroupPolicyRemediation#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.failurePercentage">failure_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#failure_percentage ResourceGroupPolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#id ResourceGroupPolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.locationFilters">location_filters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#location_filters ResourceGroupPolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.parallelDeployments">parallel_deployments</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#parallel_deployments ResourceGroupPolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.policyDefinitionReferenceId">policy_definition_reference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#policy_definition_reference_id ResourceGroupPolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.resourceCount">resource_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#resource_count ResourceGroupPolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.resourceDiscoveryMode">resource_discovery_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#resource_discovery_mode ResourceGroupPolicyRemediation#resource_discovery_mode}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#name ResourceGroupPolicyRemediation#name}.

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.policyAssignmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#policy_assignment_id ResourceGroupPolicyRemediation#policy_assignment_id}.

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.resourceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#resource_group_id ResourceGroupPolicyRemediation#resource_group_id}.

---

##### `failure_percentage`<sup>Optional</sup> <a name="failure_percentage" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.failurePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#failure_percentage ResourceGroupPolicyRemediation#failure_percentage}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#id ResourceGroupPolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_filters`<sup>Optional</sup> <a name="location_filters" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.locationFilters"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#location_filters ResourceGroupPolicyRemediation#location_filters}.

---

##### `parallel_deployments`<sup>Optional</sup> <a name="parallel_deployments" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.parallelDeployments"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#parallel_deployments ResourceGroupPolicyRemediation#parallel_deployments}.

---

##### `policy_definition_reference_id`<sup>Optional</sup> <a name="policy_definition_reference_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.policyDefinitionReferenceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#policy_definition_reference_id ResourceGroupPolicyRemediation#policy_definition_reference_id}.

---

##### `resource_count`<sup>Optional</sup> <a name="resource_count" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.resourceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#resource_count ResourceGroupPolicyRemediation#resource_count}.

---

##### `resource_discovery_mode`<sup>Optional</sup> <a name="resource_discovery_mode" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.resourceDiscoveryMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#resource_discovery_mode ResourceGroupPolicyRemediation#resource_discovery_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#timeouts ResourceGroupPolicyRemediation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetFailurePercentage">reset_failure_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetLocationFilters">reset_location_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetParallelDeployments">reset_parallel_deployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetPolicyDefinitionReferenceId">reset_policy_definition_reference_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetResourceCount">reset_resource_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetResourceDiscoveryMode">reset_resource_discovery_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#create ResourceGroupPolicyRemediation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#delete ResourceGroupPolicyRemediation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#read ResourceGroupPolicyRemediation#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#update ResourceGroupPolicyRemediation#update}.

---

##### `reset_failure_percentage` <a name="reset_failure_percentage" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetFailurePercentage"></a>

```python
def reset_failure_percentage() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location_filters` <a name="reset_location_filters" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetLocationFilters"></a>

```python
def reset_location_filters() -> None
```

##### `reset_parallel_deployments` <a name="reset_parallel_deployments" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetParallelDeployments"></a>

```python
def reset_parallel_deployments() -> None
```

##### `reset_policy_definition_reference_id` <a name="reset_policy_definition_reference_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetPolicyDefinitionReferenceId"></a>

```python
def reset_policy_definition_reference_id() -> None
```

##### `reset_resource_count` <a name="reset_resource_count" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetResourceCount"></a>

```python
def reset_resource_count() -> None
```

##### `reset_resource_discovery_mode` <a name="reset_resource_discovery_mode" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetResourceDiscoveryMode"></a>

```python
def reset_resource_discovery_mode() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ResourceGroupPolicyRemediation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_policy_remediation

resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_policy_remediation

resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_policy_remediation

resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_policy_remediation

resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ResourceGroupPolicyRemediation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourceGroupPolicyRemediation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourceGroupPolicyRemediation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourceGroupPolicyRemediation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference">ResourceGroupPolicyRemediationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.failurePercentageInput">failure_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.locationFiltersInput">location_filters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.parallelDeploymentsInput">parallel_deployments_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyAssignmentIdInput">policy_assignment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionReferenceIdInput">policy_definition_reference_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceCountInput">resource_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceDiscoveryModeInput">resource_discovery_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceGroupIdInput">resource_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.failurePercentage">failure_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.locationFilters">location_filters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.parallelDeployments">parallel_deployments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionReferenceId">policy_definition_reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceCount">resource_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceDiscoveryMode">resource_discovery_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.timeouts"></a>

```python
timeouts: ResourceGroupPolicyRemediationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference">ResourceGroupPolicyRemediationTimeoutsOutputReference</a>

---

##### `failure_percentage_input`<sup>Optional</sup> <a name="failure_percentage_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.failurePercentageInput"></a>

```python
failure_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_filters_input`<sup>Optional</sup> <a name="location_filters_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.locationFiltersInput"></a>

```python
location_filters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parallel_deployments_input`<sup>Optional</sup> <a name="parallel_deployments_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.parallelDeploymentsInput"></a>

```python
parallel_deployments_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_assignment_id_input`<sup>Optional</sup> <a name="policy_assignment_id_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyAssignmentIdInput"></a>

```python
policy_assignment_id_input: str
```

- *Type:* str

---

##### `policy_definition_reference_id_input`<sup>Optional</sup> <a name="policy_definition_reference_id_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionReferenceIdInput"></a>

```python
policy_definition_reference_id_input: str
```

- *Type:* str

---

##### `resource_count_input`<sup>Optional</sup> <a name="resource_count_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceCountInput"></a>

```python
resource_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_discovery_mode_input`<sup>Optional</sup> <a name="resource_discovery_mode_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceDiscoveryModeInput"></a>

```python
resource_discovery_mode_input: str
```

- *Type:* str

---

##### `resource_group_id_input`<sup>Optional</sup> <a name="resource_group_id_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceGroupIdInput"></a>

```python
resource_group_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ResourceGroupPolicyRemediationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a>]

---

##### `failure_percentage`<sup>Required</sup> <a name="failure_percentage" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.failurePercentage"></a>

```python
failure_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_filters`<sup>Required</sup> <a name="location_filters" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.locationFilters"></a>

```python
location_filters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parallel_deployments`<sup>Required</sup> <a name="parallel_deployments" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.parallelDeployments"></a>

```python
parallel_deployments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyAssignmentId"></a>

```python
policy_assignment_id: str
```

- *Type:* str

---

##### `policy_definition_reference_id`<sup>Required</sup> <a name="policy_definition_reference_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.policyDefinitionReferenceId"></a>

```python
policy_definition_reference_id: str
```

- *Type:* str

---

##### `resource_count`<sup>Required</sup> <a name="resource_count" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceCount"></a>

```python
resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_discovery_mode`<sup>Required</sup> <a name="resource_discovery_mode" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceDiscoveryMode"></a>

```python
resource_discovery_mode: str
```

- *Type:* str

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupPolicyRemediationConfig <a name="ResourceGroupPolicyRemediationConfig" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_policy_remediation

resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  policy_assignment_id: str,
  resource_group_id: str,
  failure_percentage: typing.Union[int, float] = None,
  id: str = None,
  location_filters: typing.List[str] = None,
  parallel_deployments: typing.Union[int, float] = None,
  policy_definition_reference_id: str = None,
  resource_count: typing.Union[int, float] = None,
  resource_discovery_mode: str = None,
  timeouts: ResourceGroupPolicyRemediationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#name ResourceGroupPolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#policy_assignment_id ResourceGroupPolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#resource_group_id ResourceGroupPolicyRemediation#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.failurePercentage">failure_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#failure_percentage ResourceGroupPolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#id ResourceGroupPolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.locationFilters">location_filters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#location_filters ResourceGroupPolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.parallelDeployments">parallel_deployments</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#parallel_deployments ResourceGroupPolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyDefinitionReferenceId">policy_definition_reference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#policy_definition_reference_id ResourceGroupPolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceCount">resource_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#resource_count ResourceGroupPolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceDiscoveryMode">resource_discovery_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#resource_discovery_mode ResourceGroupPolicyRemediation#resource_discovery_mode}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#name ResourceGroupPolicyRemediation#name}.

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyAssignmentId"></a>

```python
policy_assignment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#policy_assignment_id ResourceGroupPolicyRemediation#policy_assignment_id}.

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#resource_group_id ResourceGroupPolicyRemediation#resource_group_id}.

---

##### `failure_percentage`<sup>Optional</sup> <a name="failure_percentage" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.failurePercentage"></a>

```python
failure_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#failure_percentage ResourceGroupPolicyRemediation#failure_percentage}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#id ResourceGroupPolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_filters`<sup>Optional</sup> <a name="location_filters" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.locationFilters"></a>

```python
location_filters: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#location_filters ResourceGroupPolicyRemediation#location_filters}.

---

##### `parallel_deployments`<sup>Optional</sup> <a name="parallel_deployments" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.parallelDeployments"></a>

```python
parallel_deployments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#parallel_deployments ResourceGroupPolicyRemediation#parallel_deployments}.

---

##### `policy_definition_reference_id`<sup>Optional</sup> <a name="policy_definition_reference_id" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.policyDefinitionReferenceId"></a>

```python
policy_definition_reference_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#policy_definition_reference_id ResourceGroupPolicyRemediation#policy_definition_reference_id}.

---

##### `resource_count`<sup>Optional</sup> <a name="resource_count" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceCount"></a>

```python
resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#resource_count ResourceGroupPolicyRemediation#resource_count}.

---

##### `resource_discovery_mode`<sup>Optional</sup> <a name="resource_discovery_mode" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.resourceDiscoveryMode"></a>

```python
resource_discovery_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#resource_discovery_mode ResourceGroupPolicyRemediation#resource_discovery_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationConfig.property.timeouts"></a>

```python
timeouts: ResourceGroupPolicyRemediationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#timeouts ResourceGroupPolicyRemediation#timeouts}

---

### ResourceGroupPolicyRemediationTimeouts <a name="ResourceGroupPolicyRemediationTimeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_policy_remediation

resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#create ResourceGroupPolicyRemediation#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#delete ResourceGroupPolicyRemediation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#read ResourceGroupPolicyRemediation#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#update ResourceGroupPolicyRemediation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#create ResourceGroupPolicyRemediation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#delete ResourceGroupPolicyRemediation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#read ResourceGroupPolicyRemediation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/resource_group_policy_remediation#update ResourceGroupPolicyRemediation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupPolicyRemediationTimeoutsOutputReference <a name="ResourceGroupPolicyRemediationTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_policy_remediation

resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceGroupPolicyRemediationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupPolicyRemediation.ResourceGroupPolicyRemediationTimeouts">ResourceGroupPolicyRemediationTimeouts</a>]

---



