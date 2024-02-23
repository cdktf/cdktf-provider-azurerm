# `mediaServicesAccountFilter` Submodule <a name="`mediaServicesAccountFilter` Submodule" id="@cdktf/provider-azurerm.mediaServicesAccountFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesAccountFilter <a name="MediaServicesAccountFilter" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter azurerm_media_services_account_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilter(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  media_services_account_name: str,
  name: str,
  resource_group_name: str,
  first_quality_bitrate: typing.Union[int, float] = None,
  id: str = None,
  presentation_time_range: MediaServicesAccountFilterPresentationTimeRange = None,
  timeouts: MediaServicesAccountFilterTimeouts = None,
  track_selection: typing.Union[IResolvable, typing.List[MediaServicesAccountFilterTrackSelection]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#media_services_account_name MediaServicesAccountFilter#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#name MediaServicesAccountFilter#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#resource_group_name MediaServicesAccountFilter#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.firstQualityBitrate">first_quality_bitrate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#first_quality_bitrate MediaServicesAccountFilter#first_quality_bitrate}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#id MediaServicesAccountFilter#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.presentationTimeRange">presentation_time_range</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a></code> | presentation_time_range block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.trackSelection">track_selection</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>]]</code> | track_selection block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.mediaServicesAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#media_services_account_name MediaServicesAccountFilter#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#name MediaServicesAccountFilter#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#resource_group_name MediaServicesAccountFilter#resource_group_name}.

---

##### `first_quality_bitrate`<sup>Optional</sup> <a name="first_quality_bitrate" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.firstQualityBitrate"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#first_quality_bitrate MediaServicesAccountFilter#first_quality_bitrate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#id MediaServicesAccountFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `presentation_time_range`<sup>Optional</sup> <a name="presentation_time_range" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.presentationTimeRange"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a>

presentation_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#presentation_time_range MediaServicesAccountFilter#presentation_time_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#timeouts MediaServicesAccountFilter#timeouts}

---

##### `track_selection`<sup>Optional</sup> <a name="track_selection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.trackSelection"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>]]

track_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#track_selection MediaServicesAccountFilter#track_selection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putPresentationTimeRange">put_presentation_time_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTrackSelection">put_track_selection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetFirstQualityBitrate">reset_first_quality_bitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetPresentationTimeRange">reset_presentation_time_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetTrackSelection">reset_track_selection</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_presentation_time_range` <a name="put_presentation_time_range" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putPresentationTimeRange"></a>

```python
def put_presentation_time_range(
  unit_timescale_in_milliseconds: typing.Union[int, float],
  end_in_units: typing.Union[int, float] = None,
  force_end: typing.Union[bool, IResolvable] = None,
  live_backoff_in_units: typing.Union[int, float] = None,
  presentation_window_in_units: typing.Union[int, float] = None,
  start_in_units: typing.Union[int, float] = None
) -> None
```

###### `unit_timescale_in_milliseconds`<sup>Required</sup> <a name="unit_timescale_in_milliseconds" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putPresentationTimeRange.parameter.unitTimescaleInMilliseconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#unit_timescale_in_milliseconds MediaServicesAccountFilter#unit_timescale_in_milliseconds}.

---

###### `end_in_units`<sup>Optional</sup> <a name="end_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putPresentationTimeRange.parameter.endInUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#end_in_units MediaServicesAccountFilter#end_in_units}.

---

###### `force_end`<sup>Optional</sup> <a name="force_end" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putPresentationTimeRange.parameter.forceEnd"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#force_end MediaServicesAccountFilter#force_end}.

---

###### `live_backoff_in_units`<sup>Optional</sup> <a name="live_backoff_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putPresentationTimeRange.parameter.liveBackoffInUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#live_backoff_in_units MediaServicesAccountFilter#live_backoff_in_units}.

---

###### `presentation_window_in_units`<sup>Optional</sup> <a name="presentation_window_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putPresentationTimeRange.parameter.presentationWindowInUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#presentation_window_in_units MediaServicesAccountFilter#presentation_window_in_units}.

---

###### `start_in_units`<sup>Optional</sup> <a name="start_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putPresentationTimeRange.parameter.startInUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#start_in_units MediaServicesAccountFilter#start_in_units}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#create MediaServicesAccountFilter#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#delete MediaServicesAccountFilter#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#read MediaServicesAccountFilter#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#update MediaServicesAccountFilter#update}.

---

##### `put_track_selection` <a name="put_track_selection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTrackSelection"></a>

```python
def put_track_selection(
  value: typing.Union[IResolvable, typing.List[MediaServicesAccountFilterTrackSelection]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTrackSelection.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>]]

---

##### `reset_first_quality_bitrate` <a name="reset_first_quality_bitrate" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetFirstQualityBitrate"></a>

```python
def reset_first_quality_bitrate() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_presentation_time_range` <a name="reset_presentation_time_range" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetPresentationTimeRange"></a>

```python
def reset_presentation_time_range() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_track_selection` <a name="reset_track_selection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetTrackSelection"></a>

```python
def reset_track_selection() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MediaServicesAccountFilter resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MediaServicesAccountFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaServicesAccountFilter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaServicesAccountFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesAccountFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.presentationTimeRange">presentation_time_range</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference">MediaServicesAccountFilterPresentationTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference">MediaServicesAccountFilterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.trackSelection">track_selection</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList">MediaServicesAccountFilterTrackSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.firstQualityBitrateInput">first_quality_bitrate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.mediaServicesAccountNameInput">media_services_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.presentationTimeRangeInput">presentation_time_range_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.trackSelectionInput">track_selection_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.firstQualityBitrate">first_quality_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `presentation_time_range`<sup>Required</sup> <a name="presentation_time_range" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.presentationTimeRange"></a>

```python
presentation_time_range: MediaServicesAccountFilterPresentationTimeRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference">MediaServicesAccountFilterPresentationTimeRangeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.timeouts"></a>

```python
timeouts: MediaServicesAccountFilterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference">MediaServicesAccountFilterTimeoutsOutputReference</a>

---

##### `track_selection`<sup>Required</sup> <a name="track_selection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.trackSelection"></a>

```python
track_selection: MediaServicesAccountFilterTrackSelectionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList">MediaServicesAccountFilterTrackSelectionList</a>

---

##### `first_quality_bitrate_input`<sup>Optional</sup> <a name="first_quality_bitrate_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.firstQualityBitrateInput"></a>

```python
first_quality_bitrate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `media_services_account_name_input`<sup>Optional</sup> <a name="media_services_account_name_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.mediaServicesAccountNameInput"></a>

```python
media_services_account_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `presentation_time_range_input`<sup>Optional</sup> <a name="presentation_time_range_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.presentationTimeRangeInput"></a>

```python
presentation_time_range_input: MediaServicesAccountFilterPresentationTimeRange
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MediaServicesAccountFilterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a>]

---

##### `track_selection_input`<sup>Optional</sup> <a name="track_selection_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.trackSelectionInput"></a>

```python
track_selection_input: typing.Union[IResolvable, typing.List[MediaServicesAccountFilterTrackSelection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>]]

---

##### `first_quality_bitrate`<sup>Required</sup> <a name="first_quality_bitrate" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.firstQualityBitrate"></a>

```python
first_quality_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.mediaServicesAccountName"></a>

```python
media_services_account_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesAccountFilterConfig <a name="MediaServicesAccountFilterConfig" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  media_services_account_name: str,
  name: str,
  resource_group_name: str,
  first_quality_bitrate: typing.Union[int, float] = None,
  id: str = None,
  presentation_time_range: MediaServicesAccountFilterPresentationTimeRange = None,
  timeouts: MediaServicesAccountFilterTimeouts = None,
  track_selection: typing.Union[IResolvable, typing.List[MediaServicesAccountFilterTrackSelection]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#media_services_account_name MediaServicesAccountFilter#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#name MediaServicesAccountFilter#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#resource_group_name MediaServicesAccountFilter#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.firstQualityBitrate">first_quality_bitrate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#first_quality_bitrate MediaServicesAccountFilter#first_quality_bitrate}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#id MediaServicesAccountFilter#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.presentationTimeRange">presentation_time_range</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a></code> | presentation_time_range block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.trackSelection">track_selection</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>]]</code> | track_selection block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.mediaServicesAccountName"></a>

```python
media_services_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#media_services_account_name MediaServicesAccountFilter#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#name MediaServicesAccountFilter#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#resource_group_name MediaServicesAccountFilter#resource_group_name}.

---

##### `first_quality_bitrate`<sup>Optional</sup> <a name="first_quality_bitrate" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.firstQualityBitrate"></a>

```python
first_quality_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#first_quality_bitrate MediaServicesAccountFilter#first_quality_bitrate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#id MediaServicesAccountFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `presentation_time_range`<sup>Optional</sup> <a name="presentation_time_range" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.presentationTimeRange"></a>

```python
presentation_time_range: MediaServicesAccountFilterPresentationTimeRange
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a>

presentation_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#presentation_time_range MediaServicesAccountFilter#presentation_time_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.timeouts"></a>

```python
timeouts: MediaServicesAccountFilterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#timeouts MediaServicesAccountFilter#timeouts}

---

##### `track_selection`<sup>Optional</sup> <a name="track_selection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.trackSelection"></a>

```python
track_selection: typing.Union[IResolvable, typing.List[MediaServicesAccountFilterTrackSelection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>]]

track_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#track_selection MediaServicesAccountFilter#track_selection}

---

### MediaServicesAccountFilterPresentationTimeRange <a name="MediaServicesAccountFilterPresentationTimeRange" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange(
  unit_timescale_in_milliseconds: typing.Union[int, float],
  end_in_units: typing.Union[int, float] = None,
  force_end: typing.Union[bool, IResolvable] = None,
  live_backoff_in_units: typing.Union[int, float] = None,
  presentation_window_in_units: typing.Union[int, float] = None,
  start_in_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.unitTimescaleInMilliseconds">unit_timescale_in_milliseconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#unit_timescale_in_milliseconds MediaServicesAccountFilter#unit_timescale_in_milliseconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.endInUnits">end_in_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#end_in_units MediaServicesAccountFilter#end_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.forceEnd">force_end</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#force_end MediaServicesAccountFilter#force_end}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.liveBackoffInUnits">live_backoff_in_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#live_backoff_in_units MediaServicesAccountFilter#live_backoff_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.presentationWindowInUnits">presentation_window_in_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#presentation_window_in_units MediaServicesAccountFilter#presentation_window_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.startInUnits">start_in_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#start_in_units MediaServicesAccountFilter#start_in_units}. |

---

##### `unit_timescale_in_milliseconds`<sup>Required</sup> <a name="unit_timescale_in_milliseconds" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.unitTimescaleInMilliseconds"></a>

```python
unit_timescale_in_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#unit_timescale_in_milliseconds MediaServicesAccountFilter#unit_timescale_in_milliseconds}.

---

##### `end_in_units`<sup>Optional</sup> <a name="end_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.endInUnits"></a>

```python
end_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#end_in_units MediaServicesAccountFilter#end_in_units}.

---

##### `force_end`<sup>Optional</sup> <a name="force_end" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.forceEnd"></a>

```python
force_end: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#force_end MediaServicesAccountFilter#force_end}.

---

##### `live_backoff_in_units`<sup>Optional</sup> <a name="live_backoff_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.liveBackoffInUnits"></a>

```python
live_backoff_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#live_backoff_in_units MediaServicesAccountFilter#live_backoff_in_units}.

---

##### `presentation_window_in_units`<sup>Optional</sup> <a name="presentation_window_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.presentationWindowInUnits"></a>

```python
presentation_window_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#presentation_window_in_units MediaServicesAccountFilter#presentation_window_in_units}.

---

##### `start_in_units`<sup>Optional</sup> <a name="start_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.startInUnits"></a>

```python
start_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#start_in_units MediaServicesAccountFilter#start_in_units}.

---

### MediaServicesAccountFilterTimeouts <a name="MediaServicesAccountFilterTimeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#create MediaServicesAccountFilter#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#delete MediaServicesAccountFilter#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#read MediaServicesAccountFilter#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#update MediaServicesAccountFilter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#create MediaServicesAccountFilter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#delete MediaServicesAccountFilter#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#read MediaServicesAccountFilter#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#update MediaServicesAccountFilter#update}.

---

### MediaServicesAccountFilterTrackSelection <a name="MediaServicesAccountFilterTrackSelection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection(
  condition: typing.Union[IResolvable, typing.List[MediaServicesAccountFilterTrackSelectionCondition]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection.property.condition">condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>]]</code> | condition block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection.property.condition"></a>

```python
condition: typing.Union[IResolvable, typing.List[MediaServicesAccountFilterTrackSelectionCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>]]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#condition MediaServicesAccountFilter#condition}

---

### MediaServicesAccountFilterTrackSelectionCondition <a name="MediaServicesAccountFilterTrackSelectionCondition" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition(
  operation: str,
  property: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.operation">operation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#operation MediaServicesAccountFilter#operation}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.property">property</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#property MediaServicesAccountFilter#property}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#value MediaServicesAccountFilter#value}. |

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.operation"></a>

```python
operation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#operation MediaServicesAccountFilter#operation}.

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.property"></a>

```python
property: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#property MediaServicesAccountFilter#property}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/media_services_account_filter#value MediaServicesAccountFilter#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesAccountFilterPresentationTimeRangeOutputReference <a name="MediaServicesAccountFilterPresentationTimeRangeOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetEndInUnits">reset_end_in_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetForceEnd">reset_force_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetLiveBackoffInUnits">reset_live_backoff_in_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetPresentationWindowInUnits">reset_presentation_window_in_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetStartInUnits">reset_start_in_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_in_units` <a name="reset_end_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetEndInUnits"></a>

```python
def reset_end_in_units() -> None
```

##### `reset_force_end` <a name="reset_force_end" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetForceEnd"></a>

```python
def reset_force_end() -> None
```

##### `reset_live_backoff_in_units` <a name="reset_live_backoff_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetLiveBackoffInUnits"></a>

```python
def reset_live_backoff_in_units() -> None
```

##### `reset_presentation_window_in_units` <a name="reset_presentation_window_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetPresentationWindowInUnits"></a>

```python
def reset_presentation_window_in_units() -> None
```

##### `reset_start_in_units` <a name="reset_start_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetStartInUnits"></a>

```python
def reset_start_in_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.endInUnitsInput">end_in_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.forceEndInput">force_end_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnitsInput">live_backoff_in_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnitsInput">presentation_window_in_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.startInUnitsInput">start_in_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMillisecondsInput">unit_timescale_in_milliseconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.endInUnits">end_in_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.forceEnd">force_end</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnits">live_backoff_in_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnits">presentation_window_in_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.startInUnits">start_in_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMilliseconds">unit_timescale_in_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_in_units_input`<sup>Optional</sup> <a name="end_in_units_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.endInUnitsInput"></a>

```python
end_in_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `force_end_input`<sup>Optional</sup> <a name="force_end_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.forceEndInput"></a>

```python
force_end_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `live_backoff_in_units_input`<sup>Optional</sup> <a name="live_backoff_in_units_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnitsInput"></a>

```python
live_backoff_in_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `presentation_window_in_units_input`<sup>Optional</sup> <a name="presentation_window_in_units_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnitsInput"></a>

```python
presentation_window_in_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_in_units_input`<sup>Optional</sup> <a name="start_in_units_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.startInUnitsInput"></a>

```python
start_in_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_timescale_in_milliseconds_input`<sup>Optional</sup> <a name="unit_timescale_in_milliseconds_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMillisecondsInput"></a>

```python
unit_timescale_in_milliseconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_in_units`<sup>Required</sup> <a name="end_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.endInUnits"></a>

```python
end_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `force_end`<sup>Required</sup> <a name="force_end" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.forceEnd"></a>

```python
force_end: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `live_backoff_in_units`<sup>Required</sup> <a name="live_backoff_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnits"></a>

```python
live_backoff_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `presentation_window_in_units`<sup>Required</sup> <a name="presentation_window_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnits"></a>

```python
presentation_window_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_in_units`<sup>Required</sup> <a name="start_in_units" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.startInUnits"></a>

```python
start_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_timescale_in_milliseconds`<sup>Required</sup> <a name="unit_timescale_in_milliseconds" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMilliseconds"></a>

```python
unit_timescale_in_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.internalValue"></a>

```python
internal_value: MediaServicesAccountFilterPresentationTimeRange
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a>

---


### MediaServicesAccountFilterTimeoutsOutputReference <a name="MediaServicesAccountFilterTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaServicesAccountFilterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a>]

---


### MediaServicesAccountFilterTrackSelectionConditionList <a name="MediaServicesAccountFilterTrackSelectionConditionList" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaServicesAccountFilterTrackSelectionConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaServicesAccountFilterTrackSelectionCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>]]

---


### MediaServicesAccountFilterTrackSelectionConditionOutputReference <a name="MediaServicesAccountFilterTrackSelectionConditionOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.propertyInput">property_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.property">property</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `property_input`<sup>Optional</sup> <a name="property_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.propertyInput"></a>

```python
property_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.property"></a>

```python
property: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaServicesAccountFilterTrackSelectionCondition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>]

---


### MediaServicesAccountFilterTrackSelectionList <a name="MediaServicesAccountFilterTrackSelectionList" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaServicesAccountFilterTrackSelectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaServicesAccountFilterTrackSelection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>]]

---


### MediaServicesAccountFilterTrackSelectionOutputReference <a name="MediaServicesAccountFilterTrackSelectionOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_services_account_filter

mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.putCondition">put_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.putCondition"></a>

```python
def put_condition(
  value: typing.Union[IResolvable, typing.List[MediaServicesAccountFilterTrackSelectionCondition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.putCondition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList">MediaServicesAccountFilterTrackSelectionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.conditionInput">condition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.condition"></a>

```python
condition: MediaServicesAccountFilterTrackSelectionConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList">MediaServicesAccountFilterTrackSelectionConditionList</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.conditionInput"></a>

```python
condition_input: typing.Union[IResolvable, typing.List[MediaServicesAccountFilterTrackSelectionCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition">MediaServicesAccountFilterTrackSelectionCondition</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaServicesAccountFilterTrackSelection]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection">MediaServicesAccountFilterTrackSelection</a>]

---



