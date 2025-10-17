# `stackHciDeploymentSetting` Submodule <a name="`stackHciDeploymentSetting` Submodule" id="@cdktf/provider-azurerm.stackHciDeploymentSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciDeploymentSetting <a name="StackHciDeploymentSetting" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting azurerm_stack_hci_deployment_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSetting(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  arc_resource_ids: typing.List[str],
  scale_unit: IResolvable | typing.List[StackHciDeploymentSettingScaleUnit],
  stack_hci_cluster_id: str,
  version: str,
  id: str = None,
  timeouts: StackHciDeploymentSettingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.arcResourceIds">arc_resource_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#arc_resource_ids StackHciDeploymentSetting#arc_resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.scaleUnit">scale_unit</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>]</code> | scale_unit block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.stackHciClusterId">stack_hci_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#stack_hci_cluster_id StackHciDeploymentSetting#stack_hci_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#version StackHciDeploymentSetting#version}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#id StackHciDeploymentSetting#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `arc_resource_ids`<sup>Required</sup> <a name="arc_resource_ids" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.arcResourceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#arc_resource_ids StackHciDeploymentSetting#arc_resource_ids}.

---

##### `scale_unit`<sup>Required</sup> <a name="scale_unit" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.scaleUnit"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>]

scale_unit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#scale_unit StackHciDeploymentSetting#scale_unit}

---

##### `stack_hci_cluster_id`<sup>Required</sup> <a name="stack_hci_cluster_id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.stackHciClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#stack_hci_cluster_id StackHciDeploymentSetting#stack_hci_cluster_id}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#version StackHciDeploymentSetting#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#id StackHciDeploymentSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#timeouts StackHciDeploymentSetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putScaleUnit">put_scale_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_scale_unit` <a name="put_scale_unit" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putScaleUnit"></a>

```python
def put_scale_unit(
  value: IResolvable | typing.List[StackHciDeploymentSettingScaleUnit]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putScaleUnit.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#create StackHciDeploymentSetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#delete StackHciDeploymentSetting#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#read StackHciDeploymentSetting#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StackHciDeploymentSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StackHciDeploymentSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StackHciDeploymentSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StackHciDeploymentSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackHciDeploymentSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.scaleUnit">scale_unit</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList">StackHciDeploymentSettingScaleUnitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference">StackHciDeploymentSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.arcResourceIdsInput">arc_resource_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.scaleUnitInput">scale_unit_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.stackHciClusterIdInput">stack_hci_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.arcResourceIds">arc_resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.stackHciClusterId">stack_hci_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `scale_unit`<sup>Required</sup> <a name="scale_unit" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.scaleUnit"></a>

```python
scale_unit: StackHciDeploymentSettingScaleUnitList
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList">StackHciDeploymentSettingScaleUnitList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.timeouts"></a>

```python
timeouts: StackHciDeploymentSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference">StackHciDeploymentSettingTimeoutsOutputReference</a>

---

##### `arc_resource_ids_input`<sup>Optional</sup> <a name="arc_resource_ids_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.arcResourceIdsInput"></a>

```python
arc_resource_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `scale_unit_input`<sup>Optional</sup> <a name="scale_unit_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.scaleUnitInput"></a>

```python
scale_unit_input: IResolvable | typing.List[StackHciDeploymentSettingScaleUnit]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>]

---

##### `stack_hci_cluster_id_input`<sup>Optional</sup> <a name="stack_hci_cluster_id_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.stackHciClusterIdInput"></a>

```python
stack_hci_cluster_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | StackHciDeploymentSettingTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `arc_resource_ids`<sup>Required</sup> <a name="arc_resource_ids" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.arcResourceIds"></a>

```python
arc_resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `stack_hci_cluster_id`<sup>Required</sup> <a name="stack_hci_cluster_id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.stackHciClusterId"></a>

```python
stack_hci_cluster_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciDeploymentSettingConfig <a name="StackHciDeploymentSettingConfig" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  arc_resource_ids: typing.List[str],
  scale_unit: IResolvable | typing.List[StackHciDeploymentSettingScaleUnit],
  stack_hci_cluster_id: str,
  version: str,
  id: str = None,
  timeouts: StackHciDeploymentSettingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.arcResourceIds">arc_resource_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#arc_resource_ids StackHciDeploymentSetting#arc_resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.scaleUnit">scale_unit</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>]</code> | scale_unit block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.stackHciClusterId">stack_hci_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#stack_hci_cluster_id StackHciDeploymentSetting#stack_hci_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#version StackHciDeploymentSetting#version}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#id StackHciDeploymentSetting#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `arc_resource_ids`<sup>Required</sup> <a name="arc_resource_ids" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.arcResourceIds"></a>

```python
arc_resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#arc_resource_ids StackHciDeploymentSetting#arc_resource_ids}.

---

##### `scale_unit`<sup>Required</sup> <a name="scale_unit" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.scaleUnit"></a>

```python
scale_unit: IResolvable | typing.List[StackHciDeploymentSettingScaleUnit]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>]

scale_unit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#scale_unit StackHciDeploymentSetting#scale_unit}

---

##### `stack_hci_cluster_id`<sup>Required</sup> <a name="stack_hci_cluster_id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.stackHciClusterId"></a>

```python
stack_hci_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#stack_hci_cluster_id StackHciDeploymentSetting#stack_hci_cluster_id}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#version StackHciDeploymentSetting#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#id StackHciDeploymentSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.timeouts"></a>

```python
timeouts: StackHciDeploymentSettingTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#timeouts StackHciDeploymentSetting#timeouts}

---

### StackHciDeploymentSettingScaleUnit <a name="StackHciDeploymentSettingScaleUnit" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit(
  active_directory_organizational_unit_path: str,
  cluster: StackHciDeploymentSettingScaleUnitCluster,
  domain_fqdn: str,
  host_network: StackHciDeploymentSettingScaleUnitHostNetwork,
  infrastructure_network: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitInfrastructureNetwork],
  name_prefix: str,
  optional_service: StackHciDeploymentSettingScaleUnitOptionalService,
  physical_node: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitPhysicalNode],
  secrets_location: str,
  storage: StackHciDeploymentSettingScaleUnitStorage,
  bitlocker_boot_volume_enabled: bool | IResolvable = None,
  bitlocker_data_volume_enabled: bool | IResolvable = None,
  credential_guard_enabled: bool | IResolvable = None,
  drift_control_enabled: bool | IResolvable = None,
  drtm_protection_enabled: bool | IResolvable = None,
  episodic_data_upload_enabled: bool | IResolvable = None,
  eu_location_enabled: bool | IResolvable = None,
  hvci_protection_enabled: bool | IResolvable = None,
  side_channel_mitigation_enabled: bool | IResolvable = None,
  smb_cluster_encryption_enabled: bool | IResolvable = None,
  smb_signing_enabled: bool | IResolvable = None,
  streaming_data_client_enabled: bool | IResolvable = None,
  wdac_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.activeDirectoryOrganizationalUnitPath">active_directory_organizational_unit_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#active_directory_organizational_unit_path StackHciDeploymentSetting#active_directory_organizational_unit_path}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.cluster">cluster</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a></code> | cluster block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.domainFqdn">domain_fqdn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#domain_fqdn StackHciDeploymentSetting#domain_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.hostNetwork">host_network</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a></code> | host_network block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.infrastructureNetwork">infrastructure_network</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>]</code> | infrastructure_network block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#name_prefix StackHciDeploymentSetting#name_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.optionalService">optional_service</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a></code> | optional_service block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.physicalNode">physical_node</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>]</code> | physical_node block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.secretsLocation">secrets_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#secrets_location StackHciDeploymentSetting#secrets_location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.bitlockerBootVolumeEnabled">bitlocker_boot_volume_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#bitlocker_boot_volume_enabled StackHciDeploymentSetting#bitlocker_boot_volume_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.bitlockerDataVolumeEnabled">bitlocker_data_volume_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#bitlocker_data_volume_enabled StackHciDeploymentSetting#bitlocker_data_volume_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.credentialGuardEnabled">credential_guard_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#credential_guard_enabled StackHciDeploymentSetting#credential_guard_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.driftControlEnabled">drift_control_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#drift_control_enabled StackHciDeploymentSetting#drift_control_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.drtmProtectionEnabled">drtm_protection_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#drtm_protection_enabled StackHciDeploymentSetting#drtm_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.episodicDataUploadEnabled">episodic_data_upload_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#episodic_data_upload_enabled StackHciDeploymentSetting#episodic_data_upload_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.euLocationEnabled">eu_location_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#eu_location_enabled StackHciDeploymentSetting#eu_location_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.hvciProtectionEnabled">hvci_protection_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#hvci_protection_enabled StackHciDeploymentSetting#hvci_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.sideChannelMitigationEnabled">side_channel_mitigation_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#side_channel_mitigation_enabled StackHciDeploymentSetting#side_channel_mitigation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.smbClusterEncryptionEnabled">smb_cluster_encryption_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#smb_cluster_encryption_enabled StackHciDeploymentSetting#smb_cluster_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.smbSigningEnabled">smb_signing_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#smb_signing_enabled StackHciDeploymentSetting#smb_signing_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.streamingDataClientEnabled">streaming_data_client_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#streaming_data_client_enabled StackHciDeploymentSetting#streaming_data_client_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.wdacEnabled">wdac_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#wdac_enabled StackHciDeploymentSetting#wdac_enabled}. |

---

##### `active_directory_organizational_unit_path`<sup>Required</sup> <a name="active_directory_organizational_unit_path" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.activeDirectoryOrganizationalUnitPath"></a>

```python
active_directory_organizational_unit_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#active_directory_organizational_unit_path StackHciDeploymentSetting#active_directory_organizational_unit_path}.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.cluster"></a>

```python
cluster: StackHciDeploymentSettingScaleUnitCluster
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a>

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#cluster StackHciDeploymentSetting#cluster}

---

##### `domain_fqdn`<sup>Required</sup> <a name="domain_fqdn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.domainFqdn"></a>

```python
domain_fqdn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#domain_fqdn StackHciDeploymentSetting#domain_fqdn}.

---

##### `host_network`<sup>Required</sup> <a name="host_network" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.hostNetwork"></a>

```python
host_network: StackHciDeploymentSettingScaleUnitHostNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a>

host_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#host_network StackHciDeploymentSetting#host_network}

---

##### `infrastructure_network`<sup>Required</sup> <a name="infrastructure_network" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.infrastructureNetwork"></a>

```python
infrastructure_network: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitInfrastructureNetwork]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>]

infrastructure_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#infrastructure_network StackHciDeploymentSetting#infrastructure_network}

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#name_prefix StackHciDeploymentSetting#name_prefix}.

---

##### `optional_service`<sup>Required</sup> <a name="optional_service" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.optionalService"></a>

```python
optional_service: StackHciDeploymentSettingScaleUnitOptionalService
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a>

optional_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#optional_service StackHciDeploymentSetting#optional_service}

---

##### `physical_node`<sup>Required</sup> <a name="physical_node" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.physicalNode"></a>

```python
physical_node: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitPhysicalNode]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>]

physical_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#physical_node StackHciDeploymentSetting#physical_node}

---

##### `secrets_location`<sup>Required</sup> <a name="secrets_location" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.secretsLocation"></a>

```python
secrets_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#secrets_location StackHciDeploymentSetting#secrets_location}.

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.storage"></a>

```python
storage: StackHciDeploymentSettingScaleUnitStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#storage StackHciDeploymentSetting#storage}

---

##### `bitlocker_boot_volume_enabled`<sup>Optional</sup> <a name="bitlocker_boot_volume_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.bitlockerBootVolumeEnabled"></a>

```python
bitlocker_boot_volume_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#bitlocker_boot_volume_enabled StackHciDeploymentSetting#bitlocker_boot_volume_enabled}.

---

##### `bitlocker_data_volume_enabled`<sup>Optional</sup> <a name="bitlocker_data_volume_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.bitlockerDataVolumeEnabled"></a>

```python
bitlocker_data_volume_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#bitlocker_data_volume_enabled StackHciDeploymentSetting#bitlocker_data_volume_enabled}.

---

##### `credential_guard_enabled`<sup>Optional</sup> <a name="credential_guard_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.credentialGuardEnabled"></a>

```python
credential_guard_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#credential_guard_enabled StackHciDeploymentSetting#credential_guard_enabled}.

---

##### `drift_control_enabled`<sup>Optional</sup> <a name="drift_control_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.driftControlEnabled"></a>

```python
drift_control_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#drift_control_enabled StackHciDeploymentSetting#drift_control_enabled}.

---

##### `drtm_protection_enabled`<sup>Optional</sup> <a name="drtm_protection_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.drtmProtectionEnabled"></a>

```python
drtm_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#drtm_protection_enabled StackHciDeploymentSetting#drtm_protection_enabled}.

---

##### `episodic_data_upload_enabled`<sup>Optional</sup> <a name="episodic_data_upload_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.episodicDataUploadEnabled"></a>

```python
episodic_data_upload_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#episodic_data_upload_enabled StackHciDeploymentSetting#episodic_data_upload_enabled}.

---

##### `eu_location_enabled`<sup>Optional</sup> <a name="eu_location_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.euLocationEnabled"></a>

```python
eu_location_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#eu_location_enabled StackHciDeploymentSetting#eu_location_enabled}.

---

##### `hvci_protection_enabled`<sup>Optional</sup> <a name="hvci_protection_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.hvciProtectionEnabled"></a>

```python
hvci_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#hvci_protection_enabled StackHciDeploymentSetting#hvci_protection_enabled}.

---

##### `side_channel_mitigation_enabled`<sup>Optional</sup> <a name="side_channel_mitigation_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.sideChannelMitigationEnabled"></a>

```python
side_channel_mitigation_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#side_channel_mitigation_enabled StackHciDeploymentSetting#side_channel_mitigation_enabled}.

---

##### `smb_cluster_encryption_enabled`<sup>Optional</sup> <a name="smb_cluster_encryption_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.smbClusterEncryptionEnabled"></a>

```python
smb_cluster_encryption_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#smb_cluster_encryption_enabled StackHciDeploymentSetting#smb_cluster_encryption_enabled}.

---

##### `smb_signing_enabled`<sup>Optional</sup> <a name="smb_signing_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.smbSigningEnabled"></a>

```python
smb_signing_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#smb_signing_enabled StackHciDeploymentSetting#smb_signing_enabled}.

---

##### `streaming_data_client_enabled`<sup>Optional</sup> <a name="streaming_data_client_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.streamingDataClientEnabled"></a>

```python
streaming_data_client_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#streaming_data_client_enabled StackHciDeploymentSetting#streaming_data_client_enabled}.

---

##### `wdac_enabled`<sup>Optional</sup> <a name="wdac_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.wdacEnabled"></a>

```python
wdac_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#wdac_enabled StackHciDeploymentSetting#wdac_enabled}.

---

### StackHciDeploymentSettingScaleUnitCluster <a name="StackHciDeploymentSettingScaleUnitCluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster(
  azure_service_endpoint: str,
  cloud_account_name: str,
  name: str,
  witness_path: str,
  witness_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.azureServiceEndpoint">azure_service_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#azure_service_endpoint StackHciDeploymentSetting#azure_service_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.cloudAccountName">cloud_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#cloud_account_name StackHciDeploymentSetting#cloud_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.witnessPath">witness_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#witness_path StackHciDeploymentSetting#witness_path}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.witnessType">witness_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#witness_type StackHciDeploymentSetting#witness_type}. |

---

##### `azure_service_endpoint`<sup>Required</sup> <a name="azure_service_endpoint" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.azureServiceEndpoint"></a>

```python
azure_service_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#azure_service_endpoint StackHciDeploymentSetting#azure_service_endpoint}.

---

##### `cloud_account_name`<sup>Required</sup> <a name="cloud_account_name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.cloudAccountName"></a>

```python
cloud_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#cloud_account_name StackHciDeploymentSetting#cloud_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}.

---

##### `witness_path`<sup>Required</sup> <a name="witness_path" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.witnessPath"></a>

```python
witness_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#witness_path StackHciDeploymentSetting#witness_path}.

---

##### `witness_type`<sup>Required</sup> <a name="witness_type" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.witnessType"></a>

```python
witness_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#witness_type StackHciDeploymentSetting#witness_type}.

---

### StackHciDeploymentSettingScaleUnitHostNetwork <a name="StackHciDeploymentSettingScaleUnitHostNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork(
  intent: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitHostNetworkIntent],
  storage_network: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork],
  storage_auto_ip_enabled: bool | IResolvable = None,
  storage_connectivity_switchless_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.intent">intent</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>]</code> | intent block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageNetwork">storage_network</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>]</code> | storage_network block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageAutoIpEnabled">storage_auto_ip_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#storage_auto_ip_enabled StackHciDeploymentSetting#storage_auto_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageConnectivitySwitchlessEnabled">storage_connectivity_switchless_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#storage_connectivity_switchless_enabled StackHciDeploymentSetting#storage_connectivity_switchless_enabled}. |

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.intent"></a>

```python
intent: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitHostNetworkIntent]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>]

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#intent StackHciDeploymentSetting#intent}

---

##### `storage_network`<sup>Required</sup> <a name="storage_network" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageNetwork"></a>

```python
storage_network: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>]

storage_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#storage_network StackHciDeploymentSetting#storage_network}

---

##### `storage_auto_ip_enabled`<sup>Optional</sup> <a name="storage_auto_ip_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageAutoIpEnabled"></a>

```python
storage_auto_ip_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#storage_auto_ip_enabled StackHciDeploymentSetting#storage_auto_ip_enabled}.

---

##### `storage_connectivity_switchless_enabled`<sup>Optional</sup> <a name="storage_connectivity_switchless_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageConnectivitySwitchlessEnabled"></a>

```python
storage_connectivity_switchless_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#storage_connectivity_switchless_enabled StackHciDeploymentSetting#storage_connectivity_switchless_enabled}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkIntent <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntent" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent(
  adapter: typing.List[str],
  name: str,
  traffic_type: typing.List[str],
  adapter_property_override: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride = None,
  adapter_property_override_enabled: bool | IResolvable = None,
  qos_policy_override: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride = None,
  qos_policy_override_enabled: bool | IResolvable = None,
  virtual_switch_configuration_override: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride = None,
  virtual_switch_configuration_override_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapter">adapter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#adapter StackHciDeploymentSetting#adapter}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.trafficType">traffic_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#traffic_type StackHciDeploymentSetting#traffic_type}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapterPropertyOverride">adapter_property_override</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a></code> | adapter_property_override block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapterPropertyOverrideEnabled">adapter_property_override_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#adapter_property_override_enabled StackHciDeploymentSetting#adapter_property_override_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.qosPolicyOverride">qos_policy_override</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a></code> | qos_policy_override block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.qosPolicyOverrideEnabled">qos_policy_override_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#qos_policy_override_enabled StackHciDeploymentSetting#qos_policy_override_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.virtualSwitchConfigurationOverride">virtual_switch_configuration_override</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a></code> | virtual_switch_configuration_override block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.virtualSwitchConfigurationOverrideEnabled">virtual_switch_configuration_override_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#virtual_switch_configuration_override_enabled StackHciDeploymentSetting#virtual_switch_configuration_override_enabled}. |

---

##### `adapter`<sup>Required</sup> <a name="adapter" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapter"></a>

```python
adapter: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#adapter StackHciDeploymentSetting#adapter}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}.

---

##### `traffic_type`<sup>Required</sup> <a name="traffic_type" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.trafficType"></a>

```python
traffic_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#traffic_type StackHciDeploymentSetting#traffic_type}.

---

##### `adapter_property_override`<sup>Optional</sup> <a name="adapter_property_override" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapterPropertyOverride"></a>

```python
adapter_property_override: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a>

adapter_property_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#adapter_property_override StackHciDeploymentSetting#adapter_property_override}

---

##### `adapter_property_override_enabled`<sup>Optional</sup> <a name="adapter_property_override_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapterPropertyOverrideEnabled"></a>

```python
adapter_property_override_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#adapter_property_override_enabled StackHciDeploymentSetting#adapter_property_override_enabled}.

---

##### `qos_policy_override`<sup>Optional</sup> <a name="qos_policy_override" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.qosPolicyOverride"></a>

```python
qos_policy_override: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a>

qos_policy_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#qos_policy_override StackHciDeploymentSetting#qos_policy_override}

---

##### `qos_policy_override_enabled`<sup>Optional</sup> <a name="qos_policy_override_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.qosPolicyOverrideEnabled"></a>

```python
qos_policy_override_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#qos_policy_override_enabled StackHciDeploymentSetting#qos_policy_override_enabled}.

---

##### `virtual_switch_configuration_override`<sup>Optional</sup> <a name="virtual_switch_configuration_override" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.virtualSwitchConfigurationOverride"></a>

```python
virtual_switch_configuration_override: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a>

virtual_switch_configuration_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#virtual_switch_configuration_override StackHciDeploymentSetting#virtual_switch_configuration_override}

---

##### `virtual_switch_configuration_override_enabled`<sup>Optional</sup> <a name="virtual_switch_configuration_override_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.virtualSwitchConfigurationOverrideEnabled"></a>

```python
virtual_switch_configuration_override_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#virtual_switch_configuration_override_enabled StackHciDeploymentSetting#virtual_switch_configuration_override_enabled}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride(
  jumbo_packet: str = None,
  network_direct: str = None,
  network_direct_technology: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.jumboPacket">jumbo_packet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#jumbo_packet StackHciDeploymentSetting#jumbo_packet}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.networkDirect">network_direct</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#network_direct StackHciDeploymentSetting#network_direct}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.networkDirectTechnology">network_direct_technology</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#network_direct_technology StackHciDeploymentSetting#network_direct_technology}. |

---

##### `jumbo_packet`<sup>Optional</sup> <a name="jumbo_packet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.jumboPacket"></a>

```python
jumbo_packet: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#jumbo_packet StackHciDeploymentSetting#jumbo_packet}.

---

##### `network_direct`<sup>Optional</sup> <a name="network_direct" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.networkDirect"></a>

```python
network_direct: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#network_direct StackHciDeploymentSetting#network_direct}.

---

##### `network_direct_technology`<sup>Optional</sup> <a name="network_direct_technology" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.networkDirectTechnology"></a>

```python
network_direct_technology: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#network_direct_technology StackHciDeploymentSetting#network_direct_technology}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride(
  bandwidth_percentage_smb: str = None,
  priority_value8021_action_cluster: str = None,
  priority_value8021_action_smb: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.bandwidthPercentageSmb">bandwidth_percentage_smb</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#bandwidth_percentage_smb StackHciDeploymentSetting#bandwidth_percentage_smb}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.priorityValue8021ActionCluster">priority_value8021_action_cluster</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_cluster StackHciDeploymentSetting#priority_value8021_action_cluster}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.priorityValue8021ActionSmb">priority_value8021_action_smb</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_smb StackHciDeploymentSetting#priority_value8021_action_smb}. |

---

##### `bandwidth_percentage_smb`<sup>Optional</sup> <a name="bandwidth_percentage_smb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.bandwidthPercentageSmb"></a>

```python
bandwidth_percentage_smb: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#bandwidth_percentage_smb StackHciDeploymentSetting#bandwidth_percentage_smb}.

---

##### `priority_value8021_action_cluster`<sup>Optional</sup> <a name="priority_value8021_action_cluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.priorityValue8021ActionCluster"></a>

```python
priority_value8021_action_cluster: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_cluster StackHciDeploymentSetting#priority_value8021_action_cluster}.

---

##### `priority_value8021_action_smb`<sup>Optional</sup> <a name="priority_value8021_action_smb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.priorityValue8021ActionSmb"></a>

```python
priority_value8021_action_smb: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_smb StackHciDeploymentSetting#priority_value8021_action_smb}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride(
  enable_iov: str = None,
  load_balancing_algorithm: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.property.enableIov">enable_iov</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#enable_iov StackHciDeploymentSetting#enable_iov}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.property.loadBalancingAlgorithm">load_balancing_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#load_balancing_algorithm StackHciDeploymentSetting#load_balancing_algorithm}. |

---

##### `enable_iov`<sup>Optional</sup> <a name="enable_iov" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.property.enableIov"></a>

```python
enable_iov: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#enable_iov StackHciDeploymentSetting#enable_iov}.

---

##### `load_balancing_algorithm`<sup>Optional</sup> <a name="load_balancing_algorithm" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.property.loadBalancingAlgorithm"></a>

```python
load_balancing_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#load_balancing_algorithm StackHciDeploymentSetting#load_balancing_algorithm}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork <a name="StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork(
  name: str,
  network_adapter_name: str,
  vlan_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.networkAdapterName">network_adapter_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#network_adapter_name StackHciDeploymentSetting#network_adapter_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.vlanId">vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#vlan_id StackHciDeploymentSetting#vlan_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}.

---

##### `network_adapter_name`<sup>Required</sup> <a name="network_adapter_name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.networkAdapterName"></a>

```python
network_adapter_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#network_adapter_name StackHciDeploymentSetting#network_adapter_name}.

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#vlan_id StackHciDeploymentSetting#vlan_id}.

---

### StackHciDeploymentSettingScaleUnitInfrastructureNetwork <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork(
  dns_server: typing.List[str],
  gateway: str,
  ip_pool: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool],
  subnet_mask: str,
  dhcp_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.dnsServer">dns_server</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#dns_server StackHciDeploymentSetting#dns_server}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.gateway">gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#gateway StackHciDeploymentSetting#gateway}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.ipPool">ip_pool</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>]</code> | ip_pool block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.subnetMask">subnet_mask</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#subnet_mask StackHciDeploymentSetting#subnet_mask}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.dhcpEnabled">dhcp_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#dhcp_enabled StackHciDeploymentSetting#dhcp_enabled}. |

---

##### `dns_server`<sup>Required</sup> <a name="dns_server" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.dnsServer"></a>

```python
dns_server: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#dns_server StackHciDeploymentSetting#dns_server}.

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#gateway StackHciDeploymentSetting#gateway}.

---

##### `ip_pool`<sup>Required</sup> <a name="ip_pool" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.ipPool"></a>

```python
ip_pool: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>]

ip_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#ip_pool StackHciDeploymentSetting#ip_pool}

---

##### `subnet_mask`<sup>Required</sup> <a name="subnet_mask" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.subnetMask"></a>

```python
subnet_mask: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#subnet_mask StackHciDeploymentSetting#subnet_mask}.

---

##### `dhcp_enabled`<sup>Optional</sup> <a name="dhcp_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.dhcpEnabled"></a>

```python
dhcp_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#dhcp_enabled StackHciDeploymentSetting#dhcp_enabled}.

---

### StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool(
  ending_address: str,
  starting_address: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.property.endingAddress">ending_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#ending_address StackHciDeploymentSetting#ending_address}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.property.startingAddress">starting_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#starting_address StackHciDeploymentSetting#starting_address}. |

---

##### `ending_address`<sup>Required</sup> <a name="ending_address" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.property.endingAddress"></a>

```python
ending_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#ending_address StackHciDeploymentSetting#ending_address}.

---

##### `starting_address`<sup>Required</sup> <a name="starting_address" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.property.startingAddress"></a>

```python
starting_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#starting_address StackHciDeploymentSetting#starting_address}.

---

### StackHciDeploymentSettingScaleUnitOptionalService <a name="StackHciDeploymentSettingScaleUnitOptionalService" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService(
  custom_location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService.property.customLocation">custom_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#custom_location StackHciDeploymentSetting#custom_location}. |

---

##### `custom_location`<sup>Required</sup> <a name="custom_location" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService.property.customLocation"></a>

```python
custom_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#custom_location StackHciDeploymentSetting#custom_location}.

---

### StackHciDeploymentSettingScaleUnitPhysicalNode <a name="StackHciDeploymentSettingScaleUnitPhysicalNode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode(
  ipv4_address: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#ipv4_address StackHciDeploymentSetting#ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}. |

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#ipv4_address StackHciDeploymentSetting#ipv4_address}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}.

---

### StackHciDeploymentSettingScaleUnitStorage <a name="StackHciDeploymentSettingScaleUnitStorage" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage(
  configuration_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage.property.configurationMode">configuration_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#configuration_mode StackHciDeploymentSetting#configuration_mode}. |

---

##### `configuration_mode`<sup>Required</sup> <a name="configuration_mode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage.property.configurationMode"></a>

```python
configuration_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#configuration_mode StackHciDeploymentSetting#configuration_mode}.

---

### StackHciDeploymentSettingTimeouts <a name="StackHciDeploymentSettingTimeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#create StackHciDeploymentSetting#create}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#delete StackHciDeploymentSetting#delete}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#read StackHciDeploymentSetting#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#create StackHciDeploymentSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#delete StackHciDeploymentSetting#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#read StackHciDeploymentSetting#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciDeploymentSettingScaleUnitClusterOutputReference <a name="StackHciDeploymentSettingScaleUnitClusterOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.azureServiceEndpointInput">azure_service_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.cloudAccountNameInput">cloud_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessPathInput">witness_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessTypeInput">witness_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.azureServiceEndpoint">azure_service_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.cloudAccountName">cloud_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessPath">witness_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessType">witness_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_service_endpoint_input`<sup>Optional</sup> <a name="azure_service_endpoint_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.azureServiceEndpointInput"></a>

```python
azure_service_endpoint_input: str
```

- *Type:* str

---

##### `cloud_account_name_input`<sup>Optional</sup> <a name="cloud_account_name_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.cloudAccountNameInput"></a>

```python
cloud_account_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `witness_path_input`<sup>Optional</sup> <a name="witness_path_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessPathInput"></a>

```python
witness_path_input: str
```

- *Type:* str

---

##### `witness_type_input`<sup>Optional</sup> <a name="witness_type_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessTypeInput"></a>

```python
witness_type_input: str
```

- *Type:* str

---

##### `azure_service_endpoint`<sup>Required</sup> <a name="azure_service_endpoint" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.azureServiceEndpoint"></a>

```python
azure_service_endpoint: str
```

- *Type:* str

---

##### `cloud_account_name`<sup>Required</sup> <a name="cloud_account_name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.cloudAccountName"></a>

```python
cloud_account_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `witness_path`<sup>Required</sup> <a name="witness_path" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessPath"></a>

```python
witness_path: str
```

- *Type:* str

---

##### `witness_type`<sup>Required</sup> <a name="witness_type" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessType"></a>

```python
witness_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.internalValue"></a>

```python
internal_value: StackHciDeploymentSettingScaleUnitCluster
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetJumboPacket">reset_jumbo_packet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetNetworkDirect">reset_network_direct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetNetworkDirectTechnology">reset_network_direct_technology</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_jumbo_packet` <a name="reset_jumbo_packet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetJumboPacket"></a>

```python
def reset_jumbo_packet() -> None
```

##### `reset_network_direct` <a name="reset_network_direct" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetNetworkDirect"></a>

```python
def reset_network_direct() -> None
```

##### `reset_network_direct_technology` <a name="reset_network_direct_technology" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetNetworkDirectTechnology"></a>

```python
def reset_network_direct_technology() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.jumboPacketInput">jumbo_packet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectInput">network_direct_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectTechnologyInput">network_direct_technology_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.jumboPacket">jumbo_packet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirect">network_direct</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectTechnology">network_direct_technology</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jumbo_packet_input`<sup>Optional</sup> <a name="jumbo_packet_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.jumboPacketInput"></a>

```python
jumbo_packet_input: str
```

- *Type:* str

---

##### `network_direct_input`<sup>Optional</sup> <a name="network_direct_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectInput"></a>

```python
network_direct_input: str
```

- *Type:* str

---

##### `network_direct_technology_input`<sup>Optional</sup> <a name="network_direct_technology_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectTechnologyInput"></a>

```python
network_direct_technology_input: str
```

- *Type:* str

---

##### `jumbo_packet`<sup>Required</sup> <a name="jumbo_packet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.jumboPacket"></a>

```python
jumbo_packet: str
```

- *Type:* str

---

##### `network_direct`<sup>Required</sup> <a name="network_direct" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirect"></a>

```python
network_direct: str
```

- *Type:* str

---

##### `network_direct_technology`<sup>Required</sup> <a name="network_direct_technology" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectTechnology"></a>

```python
network_direct_technology: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.internalValue"></a>

```python
internal_value: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentList <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitHostNetworkIntent]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>]

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putAdapterPropertyOverride">put_adapter_property_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putQosPolicyOverride">put_qos_policy_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putVirtualSwitchConfigurationOverride">put_virtual_switch_configuration_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetAdapterPropertyOverride">reset_adapter_property_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetAdapterPropertyOverrideEnabled">reset_adapter_property_override_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetQosPolicyOverride">reset_qos_policy_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetQosPolicyOverrideEnabled">reset_qos_policy_override_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetVirtualSwitchConfigurationOverride">reset_virtual_switch_configuration_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetVirtualSwitchConfigurationOverrideEnabled">reset_virtual_switch_configuration_override_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_adapter_property_override` <a name="put_adapter_property_override" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putAdapterPropertyOverride"></a>

```python
def put_adapter_property_override(
  jumbo_packet: str = None,
  network_direct: str = None,
  network_direct_technology: str = None
) -> None
```

###### `jumbo_packet`<sup>Optional</sup> <a name="jumbo_packet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putAdapterPropertyOverride.parameter.jumboPacket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#jumbo_packet StackHciDeploymentSetting#jumbo_packet}.

---

###### `network_direct`<sup>Optional</sup> <a name="network_direct" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putAdapterPropertyOverride.parameter.networkDirect"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#network_direct StackHciDeploymentSetting#network_direct}.

---

###### `network_direct_technology`<sup>Optional</sup> <a name="network_direct_technology" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putAdapterPropertyOverride.parameter.networkDirectTechnology"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#network_direct_technology StackHciDeploymentSetting#network_direct_technology}.

---

##### `put_qos_policy_override` <a name="put_qos_policy_override" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putQosPolicyOverride"></a>

```python
def put_qos_policy_override(
  bandwidth_percentage_smb: str = None,
  priority_value8021_action_cluster: str = None,
  priority_value8021_action_smb: str = None
) -> None
```

###### `bandwidth_percentage_smb`<sup>Optional</sup> <a name="bandwidth_percentage_smb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putQosPolicyOverride.parameter.bandwidthPercentageSmb"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#bandwidth_percentage_smb StackHciDeploymentSetting#bandwidth_percentage_smb}.

---

###### `priority_value8021_action_cluster`<sup>Optional</sup> <a name="priority_value8021_action_cluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putQosPolicyOverride.parameter.priorityValue8021ActionCluster"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_cluster StackHciDeploymentSetting#priority_value8021_action_cluster}.

---

###### `priority_value8021_action_smb`<sup>Optional</sup> <a name="priority_value8021_action_smb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putQosPolicyOverride.parameter.priorityValue8021ActionSmb"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_smb StackHciDeploymentSetting#priority_value8021_action_smb}.

---

##### `put_virtual_switch_configuration_override` <a name="put_virtual_switch_configuration_override" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putVirtualSwitchConfigurationOverride"></a>

```python
def put_virtual_switch_configuration_override(
  enable_iov: str = None,
  load_balancing_algorithm: str = None
) -> None
```

###### `enable_iov`<sup>Optional</sup> <a name="enable_iov" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putVirtualSwitchConfigurationOverride.parameter.enableIov"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#enable_iov StackHciDeploymentSetting#enable_iov}.

---

###### `load_balancing_algorithm`<sup>Optional</sup> <a name="load_balancing_algorithm" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putVirtualSwitchConfigurationOverride.parameter.loadBalancingAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#load_balancing_algorithm StackHciDeploymentSetting#load_balancing_algorithm}.

---

##### `reset_adapter_property_override` <a name="reset_adapter_property_override" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetAdapterPropertyOverride"></a>

```python
def reset_adapter_property_override() -> None
```

##### `reset_adapter_property_override_enabled` <a name="reset_adapter_property_override_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetAdapterPropertyOverrideEnabled"></a>

```python
def reset_adapter_property_override_enabled() -> None
```

##### `reset_qos_policy_override` <a name="reset_qos_policy_override" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetQosPolicyOverride"></a>

```python
def reset_qos_policy_override() -> None
```

##### `reset_qos_policy_override_enabled` <a name="reset_qos_policy_override_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetQosPolicyOverrideEnabled"></a>

```python
def reset_qos_policy_override_enabled() -> None
```

##### `reset_virtual_switch_configuration_override` <a name="reset_virtual_switch_configuration_override" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetVirtualSwitchConfigurationOverride"></a>

```python
def reset_virtual_switch_configuration_override() -> None
```

##### `reset_virtual_switch_configuration_override_enabled` <a name="reset_virtual_switch_configuration_override_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetVirtualSwitchConfigurationOverrideEnabled"></a>

```python
def reset_virtual_switch_configuration_override_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverride">adapter_property_override</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverride">qos_policy_override</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverride">virtual_switch_configuration_override</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterInput">adapter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideEnabledInput">adapter_property_override_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideInput">adapter_property_override_input</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideEnabledInput">qos_policy_override_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideInput">qos_policy_override_input</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.trafficTypeInput">traffic_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideEnabledInput">virtual_switch_configuration_override_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideInput">virtual_switch_configuration_override_input</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapter">adapter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideEnabled">adapter_property_override_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideEnabled">qos_policy_override_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.trafficType">traffic_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideEnabled">virtual_switch_configuration_override_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `adapter_property_override`<sup>Required</sup> <a name="adapter_property_override" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverride"></a>

```python
adapter_property_override: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference</a>

---

##### `qos_policy_override`<sup>Required</sup> <a name="qos_policy_override" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverride"></a>

```python
qos_policy_override: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference</a>

---

##### `virtual_switch_configuration_override`<sup>Required</sup> <a name="virtual_switch_configuration_override" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverride"></a>

```python
virtual_switch_configuration_override: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference</a>

---

##### `adapter_input`<sup>Optional</sup> <a name="adapter_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterInput"></a>

```python
adapter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `adapter_property_override_enabled_input`<sup>Optional</sup> <a name="adapter_property_override_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideEnabledInput"></a>

```python
adapter_property_override_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `adapter_property_override_input`<sup>Optional</sup> <a name="adapter_property_override_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideInput"></a>

```python
adapter_property_override_input: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `qos_policy_override_enabled_input`<sup>Optional</sup> <a name="qos_policy_override_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideEnabledInput"></a>

```python
qos_policy_override_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `qos_policy_override_input`<sup>Optional</sup> <a name="qos_policy_override_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideInput"></a>

```python
qos_policy_override_input: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a>

---

##### `traffic_type_input`<sup>Optional</sup> <a name="traffic_type_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.trafficTypeInput"></a>

```python
traffic_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_switch_configuration_override_enabled_input`<sup>Optional</sup> <a name="virtual_switch_configuration_override_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideEnabledInput"></a>

```python
virtual_switch_configuration_override_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `virtual_switch_configuration_override_input`<sup>Optional</sup> <a name="virtual_switch_configuration_override_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideInput"></a>

```python
virtual_switch_configuration_override_input: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a>

---

##### `adapter`<sup>Required</sup> <a name="adapter" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapter"></a>

```python
adapter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `adapter_property_override_enabled`<sup>Required</sup> <a name="adapter_property_override_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideEnabled"></a>

```python
adapter_property_override_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `qos_policy_override_enabled`<sup>Required</sup> <a name="qos_policy_override_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideEnabled"></a>

```python
qos_policy_override_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `traffic_type`<sup>Required</sup> <a name="traffic_type" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.trafficType"></a>

```python
traffic_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_switch_configuration_override_enabled`<sup>Required</sup> <a name="virtual_switch_configuration_override_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideEnabled"></a>

```python
virtual_switch_configuration_override_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StackHciDeploymentSettingScaleUnitHostNetworkIntent
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetBandwidthPercentageSmb">reset_bandwidth_percentage_smb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetPriorityValue8021ActionCluster">reset_priority_value8021_action_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetPriorityValue8021ActionSmb">reset_priority_value8021_action_smb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bandwidth_percentage_smb` <a name="reset_bandwidth_percentage_smb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetBandwidthPercentageSmb"></a>

```python
def reset_bandwidth_percentage_smb() -> None
```

##### `reset_priority_value8021_action_cluster` <a name="reset_priority_value8021_action_cluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetPriorityValue8021ActionCluster"></a>

```python
def reset_priority_value8021_action_cluster() -> None
```

##### `reset_priority_value8021_action_smb` <a name="reset_priority_value8021_action_smb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetPriorityValue8021ActionSmb"></a>

```python
def reset_priority_value8021_action_smb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.bandwidthPercentageSmbInput">bandwidth_percentage_smb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionClusterInput">priority_value8021_action_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionSmbInput">priority_value8021_action_smb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.bandwidthPercentageSmb">bandwidth_percentage_smb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionCluster">priority_value8021_action_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionSmb">priority_value8021_action_smb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bandwidth_percentage_smb_input`<sup>Optional</sup> <a name="bandwidth_percentage_smb_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.bandwidthPercentageSmbInput"></a>

```python
bandwidth_percentage_smb_input: str
```

- *Type:* str

---

##### `priority_value8021_action_cluster_input`<sup>Optional</sup> <a name="priority_value8021_action_cluster_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionClusterInput"></a>

```python
priority_value8021_action_cluster_input: str
```

- *Type:* str

---

##### `priority_value8021_action_smb_input`<sup>Optional</sup> <a name="priority_value8021_action_smb_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionSmbInput"></a>

```python
priority_value8021_action_smb_input: str
```

- *Type:* str

---

##### `bandwidth_percentage_smb`<sup>Required</sup> <a name="bandwidth_percentage_smb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.bandwidthPercentageSmb"></a>

```python
bandwidth_percentage_smb: str
```

- *Type:* str

---

##### `priority_value8021_action_cluster`<sup>Required</sup> <a name="priority_value8021_action_cluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionCluster"></a>

```python
priority_value8021_action_cluster: str
```

- *Type:* str

---

##### `priority_value8021_action_smb`<sup>Required</sup> <a name="priority_value8021_action_smb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionSmb"></a>

```python
priority_value8021_action_smb: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.internalValue"></a>

```python
internal_value: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resetEnableIov">reset_enable_iov</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resetLoadBalancingAlgorithm">reset_load_balancing_algorithm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_iov` <a name="reset_enable_iov" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resetEnableIov"></a>

```python
def reset_enable_iov() -> None
```

##### `reset_load_balancing_algorithm` <a name="reset_load_balancing_algorithm" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resetLoadBalancingAlgorithm"></a>

```python
def reset_load_balancing_algorithm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.enableIovInput">enable_iov_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.loadBalancingAlgorithmInput">load_balancing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.enableIov">enable_iov</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.loadBalancingAlgorithm">load_balancing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_iov_input`<sup>Optional</sup> <a name="enable_iov_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.enableIovInput"></a>

```python
enable_iov_input: str
```

- *Type:* str

---

##### `load_balancing_algorithm_input`<sup>Optional</sup> <a name="load_balancing_algorithm_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.loadBalancingAlgorithmInput"></a>

```python
load_balancing_algorithm_input: str
```

- *Type:* str

---

##### `enable_iov`<sup>Required</sup> <a name="enable_iov" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.enableIov"></a>

```python
enable_iov: str
```

- *Type:* str

---

##### `load_balancing_algorithm`<sup>Required</sup> <a name="load_balancing_algorithm" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.loadBalancingAlgorithm"></a>

```python
load_balancing_algorithm: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.internalValue"></a>

```python
internal_value: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putIntent">put_intent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putStorageNetwork">put_storage_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resetStorageAutoIpEnabled">reset_storage_auto_ip_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resetStorageConnectivitySwitchlessEnabled">reset_storage_connectivity_switchless_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_intent` <a name="put_intent" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putIntent"></a>

```python
def put_intent(
  value: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitHostNetworkIntent]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putIntent.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>]

---

##### `put_storage_network` <a name="put_storage_network" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putStorageNetwork"></a>

```python
def put_storage_network(
  value: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putStorageNetwork.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>]

---

##### `reset_storage_auto_ip_enabled` <a name="reset_storage_auto_ip_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resetStorageAutoIpEnabled"></a>

```python
def reset_storage_auto_ip_enabled() -> None
```

##### `reset_storage_connectivity_switchless_enabled` <a name="reset_storage_connectivity_switchless_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resetStorageConnectivitySwitchlessEnabled"></a>

```python
def reset_storage_connectivity_switchless_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.intent">intent</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList">StackHciDeploymentSettingScaleUnitHostNetworkIntentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageNetwork">storage_network</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.intentInput">intent_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageAutoIpEnabledInput">storage_auto_ip_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageConnectivitySwitchlessEnabledInput">storage_connectivity_switchless_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageNetworkInput">storage_network_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageAutoIpEnabled">storage_auto_ip_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageConnectivitySwitchlessEnabled">storage_connectivity_switchless_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.intent"></a>

```python
intent: StackHciDeploymentSettingScaleUnitHostNetworkIntentList
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList">StackHciDeploymentSettingScaleUnitHostNetworkIntentList</a>

---

##### `storage_network`<sup>Required</sup> <a name="storage_network" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageNetwork"></a>

```python
storage_network: StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList</a>

---

##### `intent_input`<sup>Optional</sup> <a name="intent_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.intentInput"></a>

```python
intent_input: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitHostNetworkIntent]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>]

---

##### `storage_auto_ip_enabled_input`<sup>Optional</sup> <a name="storage_auto_ip_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageAutoIpEnabledInput"></a>

```python
storage_auto_ip_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `storage_connectivity_switchless_enabled_input`<sup>Optional</sup> <a name="storage_connectivity_switchless_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageConnectivitySwitchlessEnabledInput"></a>

```python
storage_connectivity_switchless_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `storage_network_input`<sup>Optional</sup> <a name="storage_network_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageNetworkInput"></a>

```python
storage_network_input: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>]

---

##### `storage_auto_ip_enabled`<sup>Required</sup> <a name="storage_auto_ip_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageAutoIpEnabled"></a>

```python
storage_auto_ip_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `storage_connectivity_switchless_enabled`<sup>Required</sup> <a name="storage_connectivity_switchless_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageConnectivitySwitchlessEnabled"></a>

```python
storage_connectivity_switchless_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.internalValue"></a>

```python
internal_value: StackHciDeploymentSettingScaleUnitHostNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList <a name="StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>]

---


### StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.networkAdapterNameInput">network_adapter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.vlanIdInput">vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.networkAdapterName">network_adapter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_adapter_name_input`<sup>Optional</sup> <a name="network_adapter_name_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.networkAdapterNameInput"></a>

```python
network_adapter_name_input: str
```

- *Type:* str

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.vlanIdInput"></a>

```python
vlan_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_adapter_name`<sup>Required</sup> <a name="network_adapter_name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.networkAdapterName"></a>

```python
network_adapter_name: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>

---


### StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>]

---


### StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.endingAddressInput">ending_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.startingAddressInput">starting_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.endingAddress">ending_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.startingAddress">starting_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ending_address_input`<sup>Optional</sup> <a name="ending_address_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.endingAddressInput"></a>

```python
ending_address_input: str
```

- *Type:* str

---

##### `starting_address_input`<sup>Optional</sup> <a name="starting_address_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.startingAddressInput"></a>

```python
starting_address_input: str
```

- *Type:* str

---

##### `ending_address`<sup>Required</sup> <a name="ending_address" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.endingAddress"></a>

```python
ending_address: str
```

- *Type:* str

---

##### `starting_address`<sup>Required</sup> <a name="starting_address" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.startingAddress"></a>

```python
starting_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>

---


### StackHciDeploymentSettingScaleUnitInfrastructureNetworkList <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitInfrastructureNetwork]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>]

---


### StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.putIpPool">put_ip_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resetDhcpEnabled">reset_dhcp_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_pool` <a name="put_ip_pool" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.putIpPool"></a>

```python
def put_ip_pool(
  value: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.putIpPool.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>]

---

##### `reset_dhcp_enabled` <a name="reset_dhcp_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resetDhcpEnabled"></a>

```python
def reset_dhcp_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.ipPool">ip_pool</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dhcpEnabledInput">dhcp_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dnsServerInput">dns_server_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.gatewayInput">gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.ipPoolInput">ip_pool_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.subnetMaskInput">subnet_mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dhcpEnabled">dhcp_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dnsServer">dns_server</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.subnetMask">subnet_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_pool`<sup>Required</sup> <a name="ip_pool" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.ipPool"></a>

```python
ip_pool: StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList</a>

---

##### `dhcp_enabled_input`<sup>Optional</sup> <a name="dhcp_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dhcpEnabledInput"></a>

```python
dhcp_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `dns_server_input`<sup>Optional</sup> <a name="dns_server_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dnsServerInput"></a>

```python
dns_server_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.gatewayInput"></a>

```python
gateway_input: str
```

- *Type:* str

---

##### `ip_pool_input`<sup>Optional</sup> <a name="ip_pool_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.ipPoolInput"></a>

```python
ip_pool_input: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>]

---

##### `subnet_mask_input`<sup>Optional</sup> <a name="subnet_mask_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.subnetMaskInput"></a>

```python
subnet_mask_input: str
```

- *Type:* str

---

##### `dhcp_enabled`<sup>Required</sup> <a name="dhcp_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dhcpEnabled"></a>

```python
dhcp_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `dns_server`<sup>Required</sup> <a name="dns_server" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dnsServer"></a>

```python
dns_server: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `subnet_mask`<sup>Required</sup> <a name="subnet_mask" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.subnetMask"></a>

```python
subnet_mask: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StackHciDeploymentSettingScaleUnitInfrastructureNetwork
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>

---


### StackHciDeploymentSettingScaleUnitList <a name="StackHciDeploymentSettingScaleUnitList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackHciDeploymentSettingScaleUnitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StackHciDeploymentSettingScaleUnit]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>]

---


### StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference <a name="StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.customLocationInput">custom_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.customLocation">custom_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_location_input`<sup>Optional</sup> <a name="custom_location_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.customLocationInput"></a>

```python
custom_location_input: str
```

- *Type:* str

---

##### `custom_location`<sup>Required</sup> <a name="custom_location" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.customLocation"></a>

```python
custom_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.internalValue"></a>

```python
internal_value: StackHciDeploymentSettingScaleUnitOptionalService
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a>

---


### StackHciDeploymentSettingScaleUnitOutputReference <a name="StackHciDeploymentSettingScaleUnitOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putCluster">put_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putHostNetwork">put_host_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putInfrastructureNetwork">put_infrastructure_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putOptionalService">put_optional_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putPhysicalNode">put_physical_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetBitlockerBootVolumeEnabled">reset_bitlocker_boot_volume_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetBitlockerDataVolumeEnabled">reset_bitlocker_data_volume_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetCredentialGuardEnabled">reset_credential_guard_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetDriftControlEnabled">reset_drift_control_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetDrtmProtectionEnabled">reset_drtm_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetEpisodicDataUploadEnabled">reset_episodic_data_upload_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetEuLocationEnabled">reset_eu_location_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetHvciProtectionEnabled">reset_hvci_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSideChannelMitigationEnabled">reset_side_channel_mitigation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSmbClusterEncryptionEnabled">reset_smb_cluster_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSmbSigningEnabled">reset_smb_signing_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetStreamingDataClientEnabled">reset_streaming_data_client_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetWdacEnabled">reset_wdac_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cluster` <a name="put_cluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putCluster"></a>

```python
def put_cluster(
  azure_service_endpoint: str,
  cloud_account_name: str,
  name: str,
  witness_path: str,
  witness_type: str
) -> None
```

###### `azure_service_endpoint`<sup>Required</sup> <a name="azure_service_endpoint" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putCluster.parameter.azureServiceEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#azure_service_endpoint StackHciDeploymentSetting#azure_service_endpoint}.

---

###### `cloud_account_name`<sup>Required</sup> <a name="cloud_account_name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putCluster.parameter.cloudAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#cloud_account_name StackHciDeploymentSetting#cloud_account_name}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putCluster.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}.

---

###### `witness_path`<sup>Required</sup> <a name="witness_path" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putCluster.parameter.witnessPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#witness_path StackHciDeploymentSetting#witness_path}.

---

###### `witness_type`<sup>Required</sup> <a name="witness_type" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putCluster.parameter.witnessType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#witness_type StackHciDeploymentSetting#witness_type}.

---

##### `put_host_network` <a name="put_host_network" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putHostNetwork"></a>

```python
def put_host_network(
  intent: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitHostNetworkIntent],
  storage_network: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork],
  storage_auto_ip_enabled: bool | IResolvable = None,
  storage_connectivity_switchless_enabled: bool | IResolvable = None
) -> None
```

###### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putHostNetwork.parameter.intent"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>]

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#intent StackHciDeploymentSetting#intent}

---

###### `storage_network`<sup>Required</sup> <a name="storage_network" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putHostNetwork.parameter.storageNetwork"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>]

storage_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#storage_network StackHciDeploymentSetting#storage_network}

---

###### `storage_auto_ip_enabled`<sup>Optional</sup> <a name="storage_auto_ip_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putHostNetwork.parameter.storageAutoIpEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#storage_auto_ip_enabled StackHciDeploymentSetting#storage_auto_ip_enabled}.

---

###### `storage_connectivity_switchless_enabled`<sup>Optional</sup> <a name="storage_connectivity_switchless_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putHostNetwork.parameter.storageConnectivitySwitchlessEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#storage_connectivity_switchless_enabled StackHciDeploymentSetting#storage_connectivity_switchless_enabled}.

---

##### `put_infrastructure_network` <a name="put_infrastructure_network" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putInfrastructureNetwork"></a>

```python
def put_infrastructure_network(
  value: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitInfrastructureNetwork]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putInfrastructureNetwork.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>]

---

##### `put_optional_service` <a name="put_optional_service" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putOptionalService"></a>

```python
def put_optional_service(
  custom_location: str
) -> None
```

###### `custom_location`<sup>Required</sup> <a name="custom_location" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putOptionalService.parameter.customLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#custom_location StackHciDeploymentSetting#custom_location}.

---

##### `put_physical_node` <a name="put_physical_node" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putPhysicalNode"></a>

```python
def put_physical_node(
  value: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitPhysicalNode]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putPhysicalNode.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>]

---

##### `put_storage` <a name="put_storage" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putStorage"></a>

```python
def put_storage(
  configuration_mode: str
) -> None
```

###### `configuration_mode`<sup>Required</sup> <a name="configuration_mode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putStorage.parameter.configurationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/stack_hci_deployment_setting#configuration_mode StackHciDeploymentSetting#configuration_mode}.

---

##### `reset_bitlocker_boot_volume_enabled` <a name="reset_bitlocker_boot_volume_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetBitlockerBootVolumeEnabled"></a>

```python
def reset_bitlocker_boot_volume_enabled() -> None
```

##### `reset_bitlocker_data_volume_enabled` <a name="reset_bitlocker_data_volume_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetBitlockerDataVolumeEnabled"></a>

```python
def reset_bitlocker_data_volume_enabled() -> None
```

##### `reset_credential_guard_enabled` <a name="reset_credential_guard_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetCredentialGuardEnabled"></a>

```python
def reset_credential_guard_enabled() -> None
```

##### `reset_drift_control_enabled` <a name="reset_drift_control_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetDriftControlEnabled"></a>

```python
def reset_drift_control_enabled() -> None
```

##### `reset_drtm_protection_enabled` <a name="reset_drtm_protection_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetDrtmProtectionEnabled"></a>

```python
def reset_drtm_protection_enabled() -> None
```

##### `reset_episodic_data_upload_enabled` <a name="reset_episodic_data_upload_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetEpisodicDataUploadEnabled"></a>

```python
def reset_episodic_data_upload_enabled() -> None
```

##### `reset_eu_location_enabled` <a name="reset_eu_location_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetEuLocationEnabled"></a>

```python
def reset_eu_location_enabled() -> None
```

##### `reset_hvci_protection_enabled` <a name="reset_hvci_protection_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetHvciProtectionEnabled"></a>

```python
def reset_hvci_protection_enabled() -> None
```

##### `reset_side_channel_mitigation_enabled` <a name="reset_side_channel_mitigation_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSideChannelMitigationEnabled"></a>

```python
def reset_side_channel_mitigation_enabled() -> None
```

##### `reset_smb_cluster_encryption_enabled` <a name="reset_smb_cluster_encryption_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSmbClusterEncryptionEnabled"></a>

```python
def reset_smb_cluster_encryption_enabled() -> None
```

##### `reset_smb_signing_enabled` <a name="reset_smb_signing_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSmbSigningEnabled"></a>

```python
def reset_smb_signing_enabled() -> None
```

##### `reset_streaming_data_client_enabled` <a name="reset_streaming_data_client_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetStreamingDataClientEnabled"></a>

```python
def reset_streaming_data_client_enabled() -> None
```

##### `reset_wdac_enabled` <a name="reset_wdac_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetWdacEnabled"></a>

```python
def reset_wdac_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.cluster">cluster</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference">StackHciDeploymentSettingScaleUnitClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hostNetwork">host_network</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.infrastructureNetwork">infrastructure_network</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList">StackHciDeploymentSettingScaleUnitInfrastructureNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.optionalService">optional_service</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference">StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.physicalNode">physical_node</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList">StackHciDeploymentSettingScaleUnitPhysicalNodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference">StackHciDeploymentSettingScaleUnitStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.activeDirectoryOrganizationalUnitPathInput">active_directory_organizational_unit_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerBootVolumeEnabledInput">bitlocker_boot_volume_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerDataVolumeEnabledInput">bitlocker_data_volume_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.clusterInput">cluster_input</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.credentialGuardEnabledInput">credential_guard_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.domainFqdnInput">domain_fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.driftControlEnabledInput">drift_control_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.drtmProtectionEnabledInput">drtm_protection_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.episodicDataUploadEnabledInput">episodic_data_upload_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.euLocationEnabledInput">eu_location_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hostNetworkInput">host_network_input</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hvciProtectionEnabledInput">hvci_protection_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.infrastructureNetworkInput">infrastructure_network_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.optionalServiceInput">optional_service_input</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.physicalNodeInput">physical_node_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.secretsLocationInput">secrets_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.sideChannelMitigationEnabledInput">side_channel_mitigation_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbClusterEncryptionEnabledInput">smb_cluster_encryption_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbSigningEnabledInput">smb_signing_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.storageInput">storage_input</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.streamingDataClientEnabledInput">streaming_data_client_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.wdacEnabledInput">wdac_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.activeDirectoryOrganizationalUnitPath">active_directory_organizational_unit_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerBootVolumeEnabled">bitlocker_boot_volume_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerDataVolumeEnabled">bitlocker_data_volume_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.credentialGuardEnabled">credential_guard_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.domainFqdn">domain_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.driftControlEnabled">drift_control_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.drtmProtectionEnabled">drtm_protection_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.episodicDataUploadEnabled">episodic_data_upload_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.euLocationEnabled">eu_location_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hvciProtectionEnabled">hvci_protection_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.secretsLocation">secrets_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.sideChannelMitigationEnabled">side_channel_mitigation_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbClusterEncryptionEnabled">smb_cluster_encryption_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbSigningEnabled">smb_signing_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.streamingDataClientEnabled">streaming_data_client_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.wdacEnabled">wdac_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.cluster"></a>

```python
cluster: StackHciDeploymentSettingScaleUnitClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference">StackHciDeploymentSettingScaleUnitClusterOutputReference</a>

---

##### `host_network`<sup>Required</sup> <a name="host_network" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hostNetwork"></a>

```python
host_network: StackHciDeploymentSettingScaleUnitHostNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkOutputReference</a>

---

##### `infrastructure_network`<sup>Required</sup> <a name="infrastructure_network" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.infrastructureNetwork"></a>

```python
infrastructure_network: StackHciDeploymentSettingScaleUnitInfrastructureNetworkList
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList">StackHciDeploymentSettingScaleUnitInfrastructureNetworkList</a>

---

##### `optional_service`<sup>Required</sup> <a name="optional_service" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.optionalService"></a>

```python
optional_service: StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference">StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference</a>

---

##### `physical_node`<sup>Required</sup> <a name="physical_node" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.physicalNode"></a>

```python
physical_node: StackHciDeploymentSettingScaleUnitPhysicalNodeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList">StackHciDeploymentSettingScaleUnitPhysicalNodeList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.storage"></a>

```python
storage: StackHciDeploymentSettingScaleUnitStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference">StackHciDeploymentSettingScaleUnitStorageOutputReference</a>

---

##### `active_directory_organizational_unit_path_input`<sup>Optional</sup> <a name="active_directory_organizational_unit_path_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.activeDirectoryOrganizationalUnitPathInput"></a>

```python
active_directory_organizational_unit_path_input: str
```

- *Type:* str

---

##### `bitlocker_boot_volume_enabled_input`<sup>Optional</sup> <a name="bitlocker_boot_volume_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerBootVolumeEnabledInput"></a>

```python
bitlocker_boot_volume_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `bitlocker_data_volume_enabled_input`<sup>Optional</sup> <a name="bitlocker_data_volume_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerDataVolumeEnabledInput"></a>

```python
bitlocker_data_volume_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.clusterInput"></a>

```python
cluster_input: StackHciDeploymentSettingScaleUnitCluster
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a>

---

##### `credential_guard_enabled_input`<sup>Optional</sup> <a name="credential_guard_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.credentialGuardEnabledInput"></a>

```python
credential_guard_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `domain_fqdn_input`<sup>Optional</sup> <a name="domain_fqdn_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.domainFqdnInput"></a>

```python
domain_fqdn_input: str
```

- *Type:* str

---

##### `drift_control_enabled_input`<sup>Optional</sup> <a name="drift_control_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.driftControlEnabledInput"></a>

```python
drift_control_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `drtm_protection_enabled_input`<sup>Optional</sup> <a name="drtm_protection_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.drtmProtectionEnabledInput"></a>

```python
drtm_protection_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `episodic_data_upload_enabled_input`<sup>Optional</sup> <a name="episodic_data_upload_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.episodicDataUploadEnabledInput"></a>

```python
episodic_data_upload_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `eu_location_enabled_input`<sup>Optional</sup> <a name="eu_location_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.euLocationEnabledInput"></a>

```python
eu_location_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `host_network_input`<sup>Optional</sup> <a name="host_network_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hostNetworkInput"></a>

```python
host_network_input: StackHciDeploymentSettingScaleUnitHostNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a>

---

##### `hvci_protection_enabled_input`<sup>Optional</sup> <a name="hvci_protection_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hvciProtectionEnabledInput"></a>

```python
hvci_protection_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `infrastructure_network_input`<sup>Optional</sup> <a name="infrastructure_network_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.infrastructureNetworkInput"></a>

```python
infrastructure_network_input: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitInfrastructureNetwork]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>]

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `optional_service_input`<sup>Optional</sup> <a name="optional_service_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.optionalServiceInput"></a>

```python
optional_service_input: StackHciDeploymentSettingScaleUnitOptionalService
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a>

---

##### `physical_node_input`<sup>Optional</sup> <a name="physical_node_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.physicalNodeInput"></a>

```python
physical_node_input: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitPhysicalNode]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>]

---

##### `secrets_location_input`<sup>Optional</sup> <a name="secrets_location_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.secretsLocationInput"></a>

```python
secrets_location_input: str
```

- *Type:* str

---

##### `side_channel_mitigation_enabled_input`<sup>Optional</sup> <a name="side_channel_mitigation_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.sideChannelMitigationEnabledInput"></a>

```python
side_channel_mitigation_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `smb_cluster_encryption_enabled_input`<sup>Optional</sup> <a name="smb_cluster_encryption_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbClusterEncryptionEnabledInput"></a>

```python
smb_cluster_encryption_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `smb_signing_enabled_input`<sup>Optional</sup> <a name="smb_signing_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbSigningEnabledInput"></a>

```python
smb_signing_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.storageInput"></a>

```python
storage_input: StackHciDeploymentSettingScaleUnitStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a>

---

##### `streaming_data_client_enabled_input`<sup>Optional</sup> <a name="streaming_data_client_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.streamingDataClientEnabledInput"></a>

```python
streaming_data_client_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `wdac_enabled_input`<sup>Optional</sup> <a name="wdac_enabled_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.wdacEnabledInput"></a>

```python
wdac_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `active_directory_organizational_unit_path`<sup>Required</sup> <a name="active_directory_organizational_unit_path" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.activeDirectoryOrganizationalUnitPath"></a>

```python
active_directory_organizational_unit_path: str
```

- *Type:* str

---

##### `bitlocker_boot_volume_enabled`<sup>Required</sup> <a name="bitlocker_boot_volume_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerBootVolumeEnabled"></a>

```python
bitlocker_boot_volume_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `bitlocker_data_volume_enabled`<sup>Required</sup> <a name="bitlocker_data_volume_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerDataVolumeEnabled"></a>

```python
bitlocker_data_volume_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `credential_guard_enabled`<sup>Required</sup> <a name="credential_guard_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.credentialGuardEnabled"></a>

```python
credential_guard_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `domain_fqdn`<sup>Required</sup> <a name="domain_fqdn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.domainFqdn"></a>

```python
domain_fqdn: str
```

- *Type:* str

---

##### `drift_control_enabled`<sup>Required</sup> <a name="drift_control_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.driftControlEnabled"></a>

```python
drift_control_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `drtm_protection_enabled`<sup>Required</sup> <a name="drtm_protection_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.drtmProtectionEnabled"></a>

```python
drtm_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `episodic_data_upload_enabled`<sup>Required</sup> <a name="episodic_data_upload_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.episodicDataUploadEnabled"></a>

```python
episodic_data_upload_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `eu_location_enabled`<sup>Required</sup> <a name="eu_location_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.euLocationEnabled"></a>

```python
eu_location_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `hvci_protection_enabled`<sup>Required</sup> <a name="hvci_protection_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hvciProtectionEnabled"></a>

```python
hvci_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `secrets_location`<sup>Required</sup> <a name="secrets_location" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.secretsLocation"></a>

```python
secrets_location: str
```

- *Type:* str

---

##### `side_channel_mitigation_enabled`<sup>Required</sup> <a name="side_channel_mitigation_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.sideChannelMitigationEnabled"></a>

```python
side_channel_mitigation_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `smb_cluster_encryption_enabled`<sup>Required</sup> <a name="smb_cluster_encryption_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbClusterEncryptionEnabled"></a>

```python
smb_cluster_encryption_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `smb_signing_enabled`<sup>Required</sup> <a name="smb_signing_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbSigningEnabled"></a>

```python
smb_signing_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `streaming_data_client_enabled`<sup>Required</sup> <a name="streaming_data_client_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.streamingDataClientEnabled"></a>

```python
streaming_data_client_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `wdac_enabled`<sup>Required</sup> <a name="wdac_enabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.wdacEnabled"></a>

```python
wdac_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StackHciDeploymentSettingScaleUnit
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>

---


### StackHciDeploymentSettingScaleUnitPhysicalNodeList <a name="StackHciDeploymentSettingScaleUnitPhysicalNodeList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StackHciDeploymentSettingScaleUnitPhysicalNode]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>]

---


### StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference <a name="StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.ipv4AddressInput">ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4_address_input`<sup>Optional</sup> <a name="ipv4_address_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.ipv4AddressInput"></a>

```python
ipv4_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StackHciDeploymentSettingScaleUnitPhysicalNode
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>

---


### StackHciDeploymentSettingScaleUnitStorageOutputReference <a name="StackHciDeploymentSettingScaleUnitStorageOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.configurationModeInput">configuration_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.configurationMode">configuration_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_mode_input`<sup>Optional</sup> <a name="configuration_mode_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.configurationModeInput"></a>

```python
configuration_mode_input: str
```

- *Type:* str

---

##### `configuration_mode`<sup>Required</sup> <a name="configuration_mode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.configurationMode"></a>

```python
configuration_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.internalValue"></a>

```python
internal_value: StackHciDeploymentSettingScaleUnitStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a>

---


### StackHciDeploymentSettingTimeoutsOutputReference <a name="StackHciDeploymentSettingTimeoutsOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_deployment_setting

stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StackHciDeploymentSettingTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a>

---



