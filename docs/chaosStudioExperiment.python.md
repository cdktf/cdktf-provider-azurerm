# `chaosStudioExperiment` Submodule <a name="`chaosStudioExperiment` Submodule" id="@cdktf/provider-azurerm.chaosStudioExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChaosStudioExperiment <a name="ChaosStudioExperiment" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment azurerm_chaos_studio_experiment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperiment(
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
  selectors: typing.Union[IResolvable, typing.List[ChaosStudioExperimentSelectors]],
  steps: typing.Union[IResolvable, typing.List[ChaosStudioExperimentSteps]],
  id: str = None,
  identity: ChaosStudioExperimentIdentity = None,
  timeouts: ChaosStudioExperimentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#location ChaosStudioExperiment#location}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#resource_group_name ChaosStudioExperiment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.selectors">selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>]]</code> | selectors block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.steps">steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>]]</code> | steps block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#id ChaosStudioExperiment#id}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#location ChaosStudioExperiment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#resource_group_name ChaosStudioExperiment#resource_group_name}.

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.selectors"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>]]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#selectors ChaosStudioExperiment#selectors}

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.steps"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#steps ChaosStudioExperiment#steps}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#id ChaosStudioExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#identity ChaosStudioExperiment#identity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#timeouts ChaosStudioExperiment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSelectors">put_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSteps">put_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#type ChaosStudioExperiment#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#identity_ids ChaosStudioExperiment#identity_ids}.

---

##### `put_selectors` <a name="put_selectors" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSelectors"></a>

```python
def put_selectors(
  value: typing.Union[IResolvable, typing.List[ChaosStudioExperimentSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>]]

---

##### `put_steps` <a name="put_steps" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSteps"></a>

```python
def put_steps(
  value: typing.Union[IResolvable, typing.List[ChaosStudioExperimentSteps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSteps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#create ChaosStudioExperiment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#delete ChaosStudioExperiment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#read ChaosStudioExperiment#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#update ChaosStudioExperiment#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ChaosStudioExperiment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperiment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperiment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperiment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperiment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ChaosStudioExperiment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChaosStudioExperiment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChaosStudioExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChaosStudioExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference">ChaosStudioExperimentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList">ChaosStudioExperimentSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList">ChaosStudioExperimentStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference">ChaosStudioExperimentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.selectorsInput">selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.stepsInput">steps_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.identity"></a>

```python
identity: ChaosStudioExperimentIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference">ChaosStudioExperimentIdentityOutputReference</a>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.selectors"></a>

```python
selectors: ChaosStudioExperimentSelectorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList">ChaosStudioExperimentSelectorsList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.steps"></a>

```python
steps: ChaosStudioExperimentStepsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList">ChaosStudioExperimentStepsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.timeouts"></a>

```python
timeouts: ChaosStudioExperimentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference">ChaosStudioExperimentTimeoutsOutputReference</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.identityInput"></a>

```python
identity_input: ChaosStudioExperimentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `selectors_input`<sup>Optional</sup> <a name="selectors_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.selectorsInput"></a>

```python
selectors_input: typing.Union[IResolvable, typing.List[ChaosStudioExperimentSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>]]

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.stepsInput"></a>

```python
steps_input: typing.Union[IResolvable, typing.List[ChaosStudioExperimentSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ChaosStudioExperimentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChaosStudioExperimentConfig <a name="ChaosStudioExperimentConfig" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentConfig(
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
  selectors: typing.Union[IResolvable, typing.List[ChaosStudioExperimentSelectors]],
  steps: typing.Union[IResolvable, typing.List[ChaosStudioExperimentSteps]],
  id: str = None,
  identity: ChaosStudioExperimentIdentity = None,
  timeouts: ChaosStudioExperimentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#location ChaosStudioExperiment#location}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#resource_group_name ChaosStudioExperiment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.selectors">selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>]]</code> | selectors block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.steps">steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>]]</code> | steps block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#id ChaosStudioExperiment#id}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#location ChaosStudioExperiment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#resource_group_name ChaosStudioExperiment#resource_group_name}.

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.selectors"></a>

```python
selectors: typing.Union[IResolvable, typing.List[ChaosStudioExperimentSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>]]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#selectors ChaosStudioExperiment#selectors}

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.steps"></a>

```python
steps: typing.Union[IResolvable, typing.List[ChaosStudioExperimentSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#steps ChaosStudioExperiment#steps}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#id ChaosStudioExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.identity"></a>

```python
identity: ChaosStudioExperimentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#identity ChaosStudioExperiment#identity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.timeouts"></a>

```python
timeouts: ChaosStudioExperimentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#timeouts ChaosStudioExperiment#timeouts}

---

### ChaosStudioExperimentIdentity <a name="ChaosStudioExperimentIdentity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#type ChaosStudioExperiment#type}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#identity_ids ChaosStudioExperiment#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#type ChaosStudioExperiment#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#identity_ids ChaosStudioExperiment#identity_ids}.

---

### ChaosStudioExperimentSelectors <a name="ChaosStudioExperimentSelectors" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentSelectors(
  chaos_studio_target_ids: typing.List[str],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.property.chaosStudioTargetIds">chaos_studio_target_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#chaos_studio_target_ids ChaosStudioExperiment#chaos_studio_target_ids}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}. |

---

##### `chaos_studio_target_ids`<sup>Required</sup> <a name="chaos_studio_target_ids" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.property.chaosStudioTargetIds"></a>

```python
chaos_studio_target_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#chaos_studio_target_ids ChaosStudioExperiment#chaos_studio_target_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}.

---

### ChaosStudioExperimentSteps <a name="ChaosStudioExperimentSteps" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentSteps(
  branch: typing.Union[IResolvable, typing.List[ChaosStudioExperimentStepsBranch]],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.property.branch">branch</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>]]</code> | branch block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}. |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.property.branch"></a>

```python
branch: typing.Union[IResolvable, typing.List[ChaosStudioExperimentStepsBranch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>]]

branch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#branch ChaosStudioExperiment#branch}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}.

---

### ChaosStudioExperimentStepsBranch <a name="ChaosStudioExperimentStepsBranch" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentStepsBranch(
  actions: typing.Union[IResolvable, typing.List[ChaosStudioExperimentStepsBranchActions]],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.property.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>]]</code> | actions block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.property.actions"></a>

```python
actions: typing.Union[IResolvable, typing.List[ChaosStudioExperimentStepsBranchActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#actions ChaosStudioExperiment#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}.

---

### ChaosStudioExperimentStepsBranchActions <a name="ChaosStudioExperimentStepsBranchActions" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions(
  action_type: str,
  duration: str = None,
  parameters: typing.Mapping[str] = None,
  selector_name: str = None,
  urn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#action_type ChaosStudioExperiment#action_type}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#duration ChaosStudioExperiment#duration}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#parameters ChaosStudioExperiment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.selectorName">selector_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#selector_name ChaosStudioExperiment#selector_name}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.urn">urn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#urn ChaosStudioExperiment#urn}. |

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#action_type ChaosStudioExperiment#action_type}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#duration ChaosStudioExperiment#duration}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#parameters ChaosStudioExperiment#parameters}.

---

##### `selector_name`<sup>Optional</sup> <a name="selector_name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.selectorName"></a>

```python
selector_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#selector_name ChaosStudioExperiment#selector_name}.

---

##### `urn`<sup>Optional</sup> <a name="urn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.urn"></a>

```python
urn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#urn ChaosStudioExperiment#urn}.

---

### ChaosStudioExperimentTimeouts <a name="ChaosStudioExperimentTimeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#create ChaosStudioExperiment#create}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#delete ChaosStudioExperiment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#read ChaosStudioExperiment#read}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#update ChaosStudioExperiment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#create ChaosStudioExperiment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#delete ChaosStudioExperiment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#read ChaosStudioExperiment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/chaos_studio_experiment#update ChaosStudioExperiment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChaosStudioExperimentIdentityOutputReference <a name="ChaosStudioExperimentIdentityOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.internalValue"></a>

```python
internal_value: ChaosStudioExperimentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a>

---


### ChaosStudioExperimentSelectorsList <a name="ChaosStudioExperimentSelectorsList" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChaosStudioExperimentSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ChaosStudioExperimentSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>]]

---


### ChaosStudioExperimentSelectorsOutputReference <a name="ChaosStudioExperimentSelectorsOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.chaosStudioTargetIdsInput">chaos_studio_target_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.chaosStudioTargetIds">chaos_studio_target_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chaos_studio_target_ids_input`<sup>Optional</sup> <a name="chaos_studio_target_ids_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.chaosStudioTargetIdsInput"></a>

```python
chaos_studio_target_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `chaos_studio_target_ids`<sup>Required</sup> <a name="chaos_studio_target_ids" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.chaosStudioTargetIds"></a>

```python
chaos_studio_target_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ChaosStudioExperimentSelectors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>]

---


### ChaosStudioExperimentStepsBranchActionsList <a name="ChaosStudioExperimentStepsBranchActionsList" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChaosStudioExperimentStepsBranchActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ChaosStudioExperimentStepsBranchActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>]]

---


### ChaosStudioExperimentStepsBranchActionsOutputReference <a name="ChaosStudioExperimentStepsBranchActionsOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetSelectorName">reset_selector_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetUrn">reset_urn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_selector_name` <a name="reset_selector_name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetSelectorName"></a>

```python
def reset_selector_name() -> None
```

##### `reset_urn` <a name="reset_urn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetUrn"></a>

```python
def reset_urn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.selectorNameInput">selector_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.urnInput">urn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.selectorName">selector_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.urn">urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `selector_name_input`<sup>Optional</sup> <a name="selector_name_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.selectorNameInput"></a>

```python
selector_name_input: str
```

- *Type:* str

---

##### `urn_input`<sup>Optional</sup> <a name="urn_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.urnInput"></a>

```python
urn_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `selector_name`<sup>Required</sup> <a name="selector_name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.selectorName"></a>

```python
selector_name: str
```

- *Type:* str

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.urn"></a>

```python
urn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ChaosStudioExperimentStepsBranchActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>]

---


### ChaosStudioExperimentStepsBranchList <a name="ChaosStudioExperimentStepsBranchList" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentStepsBranchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChaosStudioExperimentStepsBranchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ChaosStudioExperimentStepsBranch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>]]

---


### ChaosStudioExperimentStepsBranchOutputReference <a name="ChaosStudioExperimentStepsBranchOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.putActions">put_actions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_actions` <a name="put_actions" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.putActions"></a>

```python
def put_actions(
  value: typing.Union[IResolvable, typing.List[ChaosStudioExperimentStepsBranchActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.putActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList">ChaosStudioExperimentStepsBranchActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.actions"></a>

```python
actions: ChaosStudioExperimentStepsBranchActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList">ChaosStudioExperimentStepsBranchActionsList</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.actionsInput"></a>

```python
actions_input: typing.Union[IResolvable, typing.List[ChaosStudioExperimentStepsBranchActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ChaosStudioExperimentStepsBranch]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>]

---


### ChaosStudioExperimentStepsList <a name="ChaosStudioExperimentStepsList" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChaosStudioExperimentStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ChaosStudioExperimentSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>]]

---


### ChaosStudioExperimentStepsOutputReference <a name="ChaosStudioExperimentStepsOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.putBranch">put_branch</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_branch` <a name="put_branch" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.putBranch"></a>

```python
def put_branch(
  value: typing.Union[IResolvable, typing.List[ChaosStudioExperimentStepsBranch]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.putBranch.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.branch">branch</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList">ChaosStudioExperimentStepsBranchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.branchInput">branch_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.branch"></a>

```python
branch: ChaosStudioExperimentStepsBranchList
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList">ChaosStudioExperimentStepsBranchList</a>

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.branchInput"></a>

```python
branch_input: typing.Union[IResolvable, typing.List[ChaosStudioExperimentStepsBranch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ChaosStudioExperimentSteps]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>]

---


### ChaosStudioExperimentTimeoutsOutputReference <a name="ChaosStudioExperimentTimeoutsOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import chaos_studio_experiment

chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ChaosStudioExperimentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>]

---



