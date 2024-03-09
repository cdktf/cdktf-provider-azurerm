# `subscriptionPolicyRemediation` Submodule <a name="`subscriptionPolicyRemediation` Submodule" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionPolicyRemediation <a name="SubscriptionPolicyRemediation" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation azurerm_subscription_policy_remediation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_policy_remediation

subscriptionPolicyRemediation.SubscriptionPolicyRemediation(
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
  subscription_id: str,
  failure_percentage: typing.Union[int, float] = None,
  id: str = None,
  location_filters: typing.List[str] = None,
  parallel_deployments: typing.Union[int, float] = None,
  policy_definition_id: str = None,
  policy_definition_reference_id: str = None,
  resource_count: typing.Union[int, float] = None,
  resource_discovery_mode: str = None,
  timeouts: SubscriptionPolicyRemediationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#name SubscriptionPolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#policy_assignment_id SubscriptionPolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#subscription_id SubscriptionPolicyRemediation#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.failurePercentage">failure_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#failure_percentage SubscriptionPolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#id SubscriptionPolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.locationFilters">location_filters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#location_filters SubscriptionPolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.parallelDeployments">parallel_deployments</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#parallel_deployments SubscriptionPolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#policy_definition_id SubscriptionPolicyRemediation#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.policyDefinitionReferenceId">policy_definition_reference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#policy_definition_reference_id SubscriptionPolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.resourceCount">resource_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#resource_count SubscriptionPolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.resourceDiscoveryMode">resource_discovery_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#resource_discovery_mode SubscriptionPolicyRemediation#resource_discovery_mode}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#name SubscriptionPolicyRemediation#name}.

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.policyAssignmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#policy_assignment_id SubscriptionPolicyRemediation#policy_assignment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#subscription_id SubscriptionPolicyRemediation#subscription_id}.

---

##### `failure_percentage`<sup>Optional</sup> <a name="failure_percentage" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.failurePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#failure_percentage SubscriptionPolicyRemediation#failure_percentage}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#id SubscriptionPolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_filters`<sup>Optional</sup> <a name="location_filters" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.locationFilters"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#location_filters SubscriptionPolicyRemediation#location_filters}.

---

##### `parallel_deployments`<sup>Optional</sup> <a name="parallel_deployments" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.parallelDeployments"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#parallel_deployments SubscriptionPolicyRemediation#parallel_deployments}.

---

##### `policy_definition_id`<sup>Optional</sup> <a name="policy_definition_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.policyDefinitionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#policy_definition_id SubscriptionPolicyRemediation#policy_definition_id}.

---

##### `policy_definition_reference_id`<sup>Optional</sup> <a name="policy_definition_reference_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.policyDefinitionReferenceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#policy_definition_reference_id SubscriptionPolicyRemediation#policy_definition_reference_id}.

---

##### `resource_count`<sup>Optional</sup> <a name="resource_count" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.resourceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#resource_count SubscriptionPolicyRemediation#resource_count}.

---

##### `resource_discovery_mode`<sup>Optional</sup> <a name="resource_discovery_mode" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.resourceDiscoveryMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#resource_discovery_mode SubscriptionPolicyRemediation#resource_discovery_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#timeouts SubscriptionPolicyRemediation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetFailurePercentage">reset_failure_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetLocationFilters">reset_location_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetParallelDeployments">reset_parallel_deployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetPolicyDefinitionId">reset_policy_definition_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetPolicyDefinitionReferenceId">reset_policy_definition_reference_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetResourceCount">reset_resource_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetResourceDiscoveryMode">reset_resource_discovery_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#create SubscriptionPolicyRemediation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#delete SubscriptionPolicyRemediation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#read SubscriptionPolicyRemediation#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#update SubscriptionPolicyRemediation#update}.

---

##### `reset_failure_percentage` <a name="reset_failure_percentage" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetFailurePercentage"></a>

```python
def reset_failure_percentage() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location_filters` <a name="reset_location_filters" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetLocationFilters"></a>

```python
def reset_location_filters() -> None
```

##### `reset_parallel_deployments` <a name="reset_parallel_deployments" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetParallelDeployments"></a>

```python
def reset_parallel_deployments() -> None
```

##### `reset_policy_definition_id` <a name="reset_policy_definition_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetPolicyDefinitionId"></a>

```python
def reset_policy_definition_id() -> None
```

##### `reset_policy_definition_reference_id` <a name="reset_policy_definition_reference_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetPolicyDefinitionReferenceId"></a>

```python
def reset_policy_definition_reference_id() -> None
```

##### `reset_resource_count` <a name="reset_resource_count" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetResourceCount"></a>

```python
def reset_resource_count() -> None
```

##### `reset_resource_discovery_mode` <a name="reset_resource_discovery_mode" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetResourceDiscoveryMode"></a>

```python
def reset_resource_discovery_mode() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SubscriptionPolicyRemediation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_policy_remediation

subscriptionPolicyRemediation.SubscriptionPolicyRemediation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_policy_remediation

subscriptionPolicyRemediation.SubscriptionPolicyRemediation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_policy_remediation

subscriptionPolicyRemediation.SubscriptionPolicyRemediation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_policy_remediation

subscriptionPolicyRemediation.SubscriptionPolicyRemediation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SubscriptionPolicyRemediation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SubscriptionPolicyRemediation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SubscriptionPolicyRemediation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SubscriptionPolicyRemediation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference">SubscriptionPolicyRemediationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.failurePercentageInput">failure_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.locationFiltersInput">location_filters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.parallelDeploymentsInput">parallel_deployments_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyAssignmentIdInput">policy_assignment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionIdInput">policy_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionReferenceIdInput">policy_definition_reference_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceCountInput">resource_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceDiscoveryModeInput">resource_discovery_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.failurePercentage">failure_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.locationFilters">location_filters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.parallelDeployments">parallel_deployments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionReferenceId">policy_definition_reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceCount">resource_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceDiscoveryMode">resource_discovery_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.timeouts"></a>

```python
timeouts: SubscriptionPolicyRemediationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference">SubscriptionPolicyRemediationTimeoutsOutputReference</a>

---

##### `failure_percentage_input`<sup>Optional</sup> <a name="failure_percentage_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.failurePercentageInput"></a>

```python
failure_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_filters_input`<sup>Optional</sup> <a name="location_filters_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.locationFiltersInput"></a>

```python
location_filters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parallel_deployments_input`<sup>Optional</sup> <a name="parallel_deployments_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.parallelDeploymentsInput"></a>

```python
parallel_deployments_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_assignment_id_input`<sup>Optional</sup> <a name="policy_assignment_id_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyAssignmentIdInput"></a>

```python
policy_assignment_id_input: str
```

- *Type:* str

---

##### `policy_definition_id_input`<sup>Optional</sup> <a name="policy_definition_id_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionIdInput"></a>

```python
policy_definition_id_input: str
```

- *Type:* str

---

##### `policy_definition_reference_id_input`<sup>Optional</sup> <a name="policy_definition_reference_id_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionReferenceIdInput"></a>

```python
policy_definition_reference_id_input: str
```

- *Type:* str

---

##### `resource_count_input`<sup>Optional</sup> <a name="resource_count_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceCountInput"></a>

```python
resource_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_discovery_mode_input`<sup>Optional</sup> <a name="resource_discovery_mode_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceDiscoveryModeInput"></a>

```python
resource_discovery_mode_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SubscriptionPolicyRemediationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a>]

---

##### `failure_percentage`<sup>Required</sup> <a name="failure_percentage" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.failurePercentage"></a>

```python
failure_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_filters`<sup>Required</sup> <a name="location_filters" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.locationFilters"></a>

```python
location_filters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parallel_deployments`<sup>Required</sup> <a name="parallel_deployments" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.parallelDeployments"></a>

```python
parallel_deployments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyAssignmentId"></a>

```python
policy_assignment_id: str
```

- *Type:* str

---

##### `policy_definition_id`<sup>Required</sup> <a name="policy_definition_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionId"></a>

```python
policy_definition_id: str
```

- *Type:* str

---

##### `policy_definition_reference_id`<sup>Required</sup> <a name="policy_definition_reference_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionReferenceId"></a>

```python
policy_definition_reference_id: str
```

- *Type:* str

---

##### `resource_count`<sup>Required</sup> <a name="resource_count" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceCount"></a>

```python
resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_discovery_mode`<sup>Required</sup> <a name="resource_discovery_mode" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceDiscoveryMode"></a>

```python
resource_discovery_mode: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionPolicyRemediationConfig <a name="SubscriptionPolicyRemediationConfig" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_policy_remediation

subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  policy_assignment_id: str,
  subscription_id: str,
  failure_percentage: typing.Union[int, float] = None,
  id: str = None,
  location_filters: typing.List[str] = None,
  parallel_deployments: typing.Union[int, float] = None,
  policy_definition_id: str = None,
  policy_definition_reference_id: str = None,
  resource_count: typing.Union[int, float] = None,
  resource_discovery_mode: str = None,
  timeouts: SubscriptionPolicyRemediationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#name SubscriptionPolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#policy_assignment_id SubscriptionPolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#subscription_id SubscriptionPolicyRemediation#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.failurePercentage">failure_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#failure_percentage SubscriptionPolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#id SubscriptionPolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.locationFilters">location_filters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#location_filters SubscriptionPolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.parallelDeployments">parallel_deployments</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#parallel_deployments SubscriptionPolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#policy_definition_id SubscriptionPolicyRemediation#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyDefinitionReferenceId">policy_definition_reference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#policy_definition_reference_id SubscriptionPolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.resourceCount">resource_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#resource_count SubscriptionPolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.resourceDiscoveryMode">resource_discovery_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#resource_discovery_mode SubscriptionPolicyRemediation#resource_discovery_mode}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#name SubscriptionPolicyRemediation#name}.

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyAssignmentId"></a>

```python
policy_assignment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#policy_assignment_id SubscriptionPolicyRemediation#policy_assignment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#subscription_id SubscriptionPolicyRemediation#subscription_id}.

---

##### `failure_percentage`<sup>Optional</sup> <a name="failure_percentage" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.failurePercentage"></a>

```python
failure_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#failure_percentage SubscriptionPolicyRemediation#failure_percentage}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#id SubscriptionPolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_filters`<sup>Optional</sup> <a name="location_filters" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.locationFilters"></a>

```python
location_filters: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#location_filters SubscriptionPolicyRemediation#location_filters}.

---

##### `parallel_deployments`<sup>Optional</sup> <a name="parallel_deployments" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.parallelDeployments"></a>

```python
parallel_deployments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#parallel_deployments SubscriptionPolicyRemediation#parallel_deployments}.

---

##### `policy_definition_id`<sup>Optional</sup> <a name="policy_definition_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyDefinitionId"></a>

```python
policy_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#policy_definition_id SubscriptionPolicyRemediation#policy_definition_id}.

---

##### `policy_definition_reference_id`<sup>Optional</sup> <a name="policy_definition_reference_id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyDefinitionReferenceId"></a>

```python
policy_definition_reference_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#policy_definition_reference_id SubscriptionPolicyRemediation#policy_definition_reference_id}.

---

##### `resource_count`<sup>Optional</sup> <a name="resource_count" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.resourceCount"></a>

```python
resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#resource_count SubscriptionPolicyRemediation#resource_count}.

---

##### `resource_discovery_mode`<sup>Optional</sup> <a name="resource_discovery_mode" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.resourceDiscoveryMode"></a>

```python
resource_discovery_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#resource_discovery_mode SubscriptionPolicyRemediation#resource_discovery_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.timeouts"></a>

```python
timeouts: SubscriptionPolicyRemediationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#timeouts SubscriptionPolicyRemediation#timeouts}

---

### SubscriptionPolicyRemediationTimeouts <a name="SubscriptionPolicyRemediationTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_policy_remediation

subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#create SubscriptionPolicyRemediation#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#delete SubscriptionPolicyRemediation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#read SubscriptionPolicyRemediation#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#update SubscriptionPolicyRemediation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#create SubscriptionPolicyRemediation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#delete SubscriptionPolicyRemediation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#read SubscriptionPolicyRemediation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/subscription_policy_remediation#update SubscriptionPolicyRemediation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionPolicyRemediationTimeoutsOutputReference <a name="SubscriptionPolicyRemediationTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_policy_remediation

subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SubscriptionPolicyRemediationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a>]

---



