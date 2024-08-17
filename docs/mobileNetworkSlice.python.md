# `mobileNetworkSlice` Submodule <a name="`mobileNetworkSlice` Submodule" id="@cdktf/provider-azurerm.mobileNetworkSlice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkSlice <a name="MobileNetworkSlice" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice azurerm_mobile_network_slice}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_slice

mobileNetworkSlice.MobileNetworkSlice(
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
  mobile_network_id: str,
  name: str,
  single_network_slice_selection_assistance_information: MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MobileNetworkSliceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#location MobileNetworkSlice#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.mobileNetworkId">mobile_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#mobile_network_id MobileNetworkSlice#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#name MobileNetworkSlice#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.singleNetworkSliceSelectionAssistanceInformation">single_network_slice_selection_assistance_information</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation">MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation</a></code> | single_network_slice_selection_assistance_information block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#description MobileNetworkSlice#description}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#id MobileNetworkSlice#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#tags MobileNetworkSlice#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts">MobileNetworkSliceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#location MobileNetworkSlice#location}.

---

##### `mobile_network_id`<sup>Required</sup> <a name="mobile_network_id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.mobileNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#mobile_network_id MobileNetworkSlice#mobile_network_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#name MobileNetworkSlice#name}.

---

##### `single_network_slice_selection_assistance_information`<sup>Required</sup> <a name="single_network_slice_selection_assistance_information" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.singleNetworkSliceSelectionAssistanceInformation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation">MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation</a>

single_network_slice_selection_assistance_information block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#single_network_slice_selection_assistance_information MobileNetworkSlice#single_network_slice_selection_assistance_information}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#description MobileNetworkSlice#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#id MobileNetworkSlice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#tags MobileNetworkSlice#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts">MobileNetworkSliceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#timeouts MobileNetworkSlice#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.putSingleNetworkSliceSelectionAssistanceInformation">put_single_network_slice_selection_assistance_information</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_single_network_slice_selection_assistance_information` <a name="put_single_network_slice_selection_assistance_information" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.putSingleNetworkSliceSelectionAssistanceInformation"></a>

```python
def put_single_network_slice_selection_assistance_information(
  slice_service_type: typing.Union[int, float],
  slice_differentiator: str = None
) -> None
```

###### `slice_service_type`<sup>Required</sup> <a name="slice_service_type" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.putSingleNetworkSliceSelectionAssistanceInformation.parameter.sliceServiceType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#slice_service_type MobileNetworkSlice#slice_service_type}.

---

###### `slice_differentiator`<sup>Optional</sup> <a name="slice_differentiator" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.putSingleNetworkSliceSelectionAssistanceInformation.parameter.sliceDifferentiator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#slice_differentiator MobileNetworkSlice#slice_differentiator}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#create MobileNetworkSlice#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#delete MobileNetworkSlice#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#read MobileNetworkSlice#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#update MobileNetworkSlice#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MobileNetworkSlice resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_slice

mobileNetworkSlice.MobileNetworkSlice.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_slice

mobileNetworkSlice.MobileNetworkSlice.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_slice

mobileNetworkSlice.MobileNetworkSlice.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_slice

mobileNetworkSlice.MobileNetworkSlice.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MobileNetworkSlice resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MobileNetworkSlice to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MobileNetworkSlice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkSlice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.singleNetworkSliceSelectionAssistanceInformation">single_network_slice_selection_assistance_information</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference">MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference">MobileNetworkSliceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.mobileNetworkIdInput">mobile_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.singleNetworkSliceSelectionAssistanceInformationInput">single_network_slice_selection_assistance_information_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation">MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts">MobileNetworkSliceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.mobileNetworkId">mobile_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `single_network_slice_selection_assistance_information`<sup>Required</sup> <a name="single_network_slice_selection_assistance_information" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.singleNetworkSliceSelectionAssistanceInformation"></a>

```python
single_network_slice_selection_assistance_information: MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference">MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.timeouts"></a>

```python
timeouts: MobileNetworkSliceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference">MobileNetworkSliceTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mobile_network_id_input`<sup>Optional</sup> <a name="mobile_network_id_input" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.mobileNetworkIdInput"></a>

```python
mobile_network_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `single_network_slice_selection_assistance_information_input`<sup>Optional</sup> <a name="single_network_slice_selection_assistance_information_input" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.singleNetworkSliceSelectionAssistanceInformationInput"></a>

```python
single_network_slice_selection_assistance_information_input: MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation">MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MobileNetworkSliceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts">MobileNetworkSliceTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mobile_network_id`<sup>Required</sup> <a name="mobile_network_id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.mobileNetworkId"></a>

```python
mobile_network_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSlice.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkSliceConfig <a name="MobileNetworkSliceConfig" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_slice

mobileNetworkSlice.MobileNetworkSliceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  mobile_network_id: str,
  name: str,
  single_network_slice_selection_assistance_information: MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MobileNetworkSliceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#location MobileNetworkSlice#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.mobileNetworkId">mobile_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#mobile_network_id MobileNetworkSlice#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#name MobileNetworkSlice#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.singleNetworkSliceSelectionAssistanceInformation">single_network_slice_selection_assistance_information</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation">MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation</a></code> | single_network_slice_selection_assistance_information block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#description MobileNetworkSlice#description}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#id MobileNetworkSlice#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#tags MobileNetworkSlice#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts">MobileNetworkSliceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#location MobileNetworkSlice#location}.

---

##### `mobile_network_id`<sup>Required</sup> <a name="mobile_network_id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.mobileNetworkId"></a>

```python
mobile_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#mobile_network_id MobileNetworkSlice#mobile_network_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#name MobileNetworkSlice#name}.

---

##### `single_network_slice_selection_assistance_information`<sup>Required</sup> <a name="single_network_slice_selection_assistance_information" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.singleNetworkSliceSelectionAssistanceInformation"></a>

```python
single_network_slice_selection_assistance_information: MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation">MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation</a>

single_network_slice_selection_assistance_information block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#single_network_slice_selection_assistance_information MobileNetworkSlice#single_network_slice_selection_assistance_information}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#description MobileNetworkSlice#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#id MobileNetworkSlice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#tags MobileNetworkSlice#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceConfig.property.timeouts"></a>

```python
timeouts: MobileNetworkSliceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts">MobileNetworkSliceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#timeouts MobileNetworkSlice#timeouts}

---

### MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation <a name="MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_slice

mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation(
  slice_service_type: typing.Union[int, float],
  slice_differentiator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation.property.sliceServiceType">slice_service_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#slice_service_type MobileNetworkSlice#slice_service_type}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation.property.sliceDifferentiator">slice_differentiator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#slice_differentiator MobileNetworkSlice#slice_differentiator}. |

---

##### `slice_service_type`<sup>Required</sup> <a name="slice_service_type" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation.property.sliceServiceType"></a>

```python
slice_service_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#slice_service_type MobileNetworkSlice#slice_service_type}.

---

##### `slice_differentiator`<sup>Optional</sup> <a name="slice_differentiator" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation.property.sliceDifferentiator"></a>

```python
slice_differentiator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#slice_differentiator MobileNetworkSlice#slice_differentiator}.

---

### MobileNetworkSliceTimeouts <a name="MobileNetworkSliceTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_slice

mobileNetworkSlice.MobileNetworkSliceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#create MobileNetworkSlice#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#delete MobileNetworkSlice#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#read MobileNetworkSlice#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#update MobileNetworkSlice#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#create MobileNetworkSlice#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#delete MobileNetworkSlice#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#read MobileNetworkSlice#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/mobile_network_slice#update MobileNetworkSlice#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference <a name="MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_slice

mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.resetSliceDifferentiator">reset_slice_differentiator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_slice_differentiator` <a name="reset_slice_differentiator" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.resetSliceDifferentiator"></a>

```python
def reset_slice_differentiator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.sliceDifferentiatorInput">slice_differentiator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.sliceServiceTypeInput">slice_service_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.sliceDifferentiator">slice_differentiator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.sliceServiceType">slice_service_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation">MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `slice_differentiator_input`<sup>Optional</sup> <a name="slice_differentiator_input" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.sliceDifferentiatorInput"></a>

```python
slice_differentiator_input: str
```

- *Type:* str

---

##### `slice_service_type_input`<sup>Optional</sup> <a name="slice_service_type_input" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.sliceServiceTypeInput"></a>

```python
slice_service_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `slice_differentiator`<sup>Required</sup> <a name="slice_differentiator" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.sliceDifferentiator"></a>

```python
slice_differentiator: str
```

- *Type:* str

---

##### `slice_service_type`<sup>Required</sup> <a name="slice_service_type" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.sliceServiceType"></a>

```python
slice_service_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.internalValue"></a>

```python
internal_value: MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation">MobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation</a>

---


### MobileNetworkSliceTimeoutsOutputReference <a name="MobileNetworkSliceTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_slice

mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts">MobileNetworkSliceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MobileNetworkSliceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mobileNetworkSlice.MobileNetworkSliceTimeouts">MobileNetworkSliceTimeouts</a>]

---



