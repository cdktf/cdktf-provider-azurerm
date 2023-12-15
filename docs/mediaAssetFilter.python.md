# `mediaAssetFilter` Submodule <a name="`mediaAssetFilter` Submodule" id="@cdktf/provider-azurerm.mediaAssetFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaAssetFilter <a name="MediaAssetFilter" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter azurerm_media_asset_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilter(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  asset_id: str,
  name: str,
  first_quality_bitrate: typing.Union[int, float] = None,
  id: str = None,
  presentation_time_range: MediaAssetFilterPresentationTimeRange = None,
  timeouts: MediaAssetFilterTimeouts = None,
  track_selection: typing.Union[IResolvable, typing.List[MediaAssetFilterTrackSelection]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.assetId">asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#asset_id MediaAssetFilter#asset_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#name MediaAssetFilter#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.firstQualityBitrate">first_quality_bitrate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#first_quality_bitrate MediaAssetFilter#first_quality_bitrate}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#id MediaAssetFilter#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.presentationTimeRange">presentation_time_range</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a></code> | presentation_time_range block. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.trackSelection">track_selection</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>]]</code> | track_selection block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.assetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#asset_id MediaAssetFilter#asset_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#name MediaAssetFilter#name}.

---

##### `first_quality_bitrate`<sup>Optional</sup> <a name="first_quality_bitrate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.firstQualityBitrate"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#first_quality_bitrate MediaAssetFilter#first_quality_bitrate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#id MediaAssetFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `presentation_time_range`<sup>Optional</sup> <a name="presentation_time_range" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.presentationTimeRange"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a>

presentation_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#presentation_time_range MediaAssetFilter#presentation_time_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#timeouts MediaAssetFilter#timeouts}

---

##### `track_selection`<sup>Optional</sup> <a name="track_selection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.trackSelection"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>]]

track_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#track_selection MediaAssetFilter#track_selection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putPresentationTimeRange">put_presentation_time_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTrackSelection">put_track_selection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetFirstQualityBitrate">reset_first_quality_bitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetPresentationTimeRange">reset_presentation_time_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetTrackSelection">reset_track_selection</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_presentation_time_range` <a name="put_presentation_time_range" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putPresentationTimeRange"></a>

```python
def put_presentation_time_range(
  end_in_units: typing.Union[int, float] = None,
  force_end: typing.Union[bool, IResolvable] = None,
  live_backoff_in_units: typing.Union[int, float] = None,
  presentation_window_in_units: typing.Union[int, float] = None,
  start_in_units: typing.Union[int, float] = None,
  unit_timescale_in_miliseconds: typing.Union[int, float] = None
) -> None
```

###### `end_in_units`<sup>Optional</sup> <a name="end_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putPresentationTimeRange.parameter.endInUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#end_in_units MediaAssetFilter#end_in_units}.

---

###### `force_end`<sup>Optional</sup> <a name="force_end" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putPresentationTimeRange.parameter.forceEnd"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#force_end MediaAssetFilter#force_end}.

---

###### `live_backoff_in_units`<sup>Optional</sup> <a name="live_backoff_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putPresentationTimeRange.parameter.liveBackoffInUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#live_backoff_in_units MediaAssetFilter#live_backoff_in_units}.

---

###### `presentation_window_in_units`<sup>Optional</sup> <a name="presentation_window_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putPresentationTimeRange.parameter.presentationWindowInUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#presentation_window_in_units MediaAssetFilter#presentation_window_in_units}.

---

###### `start_in_units`<sup>Optional</sup> <a name="start_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putPresentationTimeRange.parameter.startInUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#start_in_units MediaAssetFilter#start_in_units}.

---

###### `unit_timescale_in_miliseconds`<sup>Optional</sup> <a name="unit_timescale_in_miliseconds" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putPresentationTimeRange.parameter.unitTimescaleInMiliseconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#unit_timescale_in_miliseconds MediaAssetFilter#unit_timescale_in_miliseconds}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#create MediaAssetFilter#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#delete MediaAssetFilter#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#read MediaAssetFilter#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#update MediaAssetFilter#update}.

---

##### `put_track_selection` <a name="put_track_selection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTrackSelection"></a>

```python
def put_track_selection(
  value: typing.Union[IResolvable, typing.List[MediaAssetFilterTrackSelection]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTrackSelection.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>]]

---

##### `reset_first_quality_bitrate` <a name="reset_first_quality_bitrate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetFirstQualityBitrate"></a>

```python
def reset_first_quality_bitrate() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_presentation_time_range` <a name="reset_presentation_time_range" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetPresentationTimeRange"></a>

```python
def reset_presentation_time_range() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_track_selection` <a name="reset_track_selection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetTrackSelection"></a>

```python
def reset_track_selection() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MediaAssetFilter resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MediaAssetFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaAssetFilter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaAssetFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaAssetFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.presentationTimeRange">presentation_time_range</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference">MediaAssetFilterPresentationTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference">MediaAssetFilterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.trackSelection">track_selection</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList">MediaAssetFilterTrackSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.assetIdInput">asset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.firstQualityBitrateInput">first_quality_bitrate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.presentationTimeRangeInput">presentation_time_range_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.trackSelectionInput">track_selection_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.assetId">asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.firstQualityBitrate">first_quality_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `presentation_time_range`<sup>Required</sup> <a name="presentation_time_range" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.presentationTimeRange"></a>

```python
presentation_time_range: MediaAssetFilterPresentationTimeRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference">MediaAssetFilterPresentationTimeRangeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.timeouts"></a>

```python
timeouts: MediaAssetFilterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference">MediaAssetFilterTimeoutsOutputReference</a>

---

##### `track_selection`<sup>Required</sup> <a name="track_selection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.trackSelection"></a>

```python
track_selection: MediaAssetFilterTrackSelectionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList">MediaAssetFilterTrackSelectionList</a>

---

##### `asset_id_input`<sup>Optional</sup> <a name="asset_id_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.assetIdInput"></a>

```python
asset_id_input: str
```

- *Type:* str

---

##### `first_quality_bitrate_input`<sup>Optional</sup> <a name="first_quality_bitrate_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.firstQualityBitrateInput"></a>

```python
first_quality_bitrate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `presentation_time_range_input`<sup>Optional</sup> <a name="presentation_time_range_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.presentationTimeRangeInput"></a>

```python
presentation_time_range_input: MediaAssetFilterPresentationTimeRange
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MediaAssetFilterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>]

---

##### `track_selection_input`<sup>Optional</sup> <a name="track_selection_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.trackSelectionInput"></a>

```python
track_selection_input: typing.Union[IResolvable, typing.List[MediaAssetFilterTrackSelection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>]]

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

---

##### `first_quality_bitrate`<sup>Required</sup> <a name="first_quality_bitrate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.firstQualityBitrate"></a>

```python
first_quality_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaAssetFilterConfig <a name="MediaAssetFilterConfig" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  asset_id: str,
  name: str,
  first_quality_bitrate: typing.Union[int, float] = None,
  id: str = None,
  presentation_time_range: MediaAssetFilterPresentationTimeRange = None,
  timeouts: MediaAssetFilterTimeouts = None,
  track_selection: typing.Union[IResolvable, typing.List[MediaAssetFilterTrackSelection]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.assetId">asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#asset_id MediaAssetFilter#asset_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#name MediaAssetFilter#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.firstQualityBitrate">first_quality_bitrate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#first_quality_bitrate MediaAssetFilter#first_quality_bitrate}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#id MediaAssetFilter#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.presentationTimeRange">presentation_time_range</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a></code> | presentation_time_range block. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.trackSelection">track_selection</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>]]</code> | track_selection block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#asset_id MediaAssetFilter#asset_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#name MediaAssetFilter#name}.

---

##### `first_quality_bitrate`<sup>Optional</sup> <a name="first_quality_bitrate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.firstQualityBitrate"></a>

```python
first_quality_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#first_quality_bitrate MediaAssetFilter#first_quality_bitrate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#id MediaAssetFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `presentation_time_range`<sup>Optional</sup> <a name="presentation_time_range" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.presentationTimeRange"></a>

```python
presentation_time_range: MediaAssetFilterPresentationTimeRange
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a>

presentation_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#presentation_time_range MediaAssetFilter#presentation_time_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.timeouts"></a>

```python
timeouts: MediaAssetFilterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#timeouts MediaAssetFilter#timeouts}

---

##### `track_selection`<sup>Optional</sup> <a name="track_selection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.trackSelection"></a>

```python
track_selection: typing.Union[IResolvable, typing.List[MediaAssetFilterTrackSelection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>]]

track_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#track_selection MediaAssetFilter#track_selection}

---

### MediaAssetFilterPresentationTimeRange <a name="MediaAssetFilterPresentationTimeRange" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilterPresentationTimeRange(
  end_in_units: typing.Union[int, float] = None,
  force_end: typing.Union[bool, IResolvable] = None,
  live_backoff_in_units: typing.Union[int, float] = None,
  presentation_window_in_units: typing.Union[int, float] = None,
  start_in_units: typing.Union[int, float] = None,
  unit_timescale_in_miliseconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.endInUnits">end_in_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#end_in_units MediaAssetFilter#end_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.forceEnd">force_end</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#force_end MediaAssetFilter#force_end}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.liveBackoffInUnits">live_backoff_in_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#live_backoff_in_units MediaAssetFilter#live_backoff_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.presentationWindowInUnits">presentation_window_in_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#presentation_window_in_units MediaAssetFilter#presentation_window_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.startInUnits">start_in_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#start_in_units MediaAssetFilter#start_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.unitTimescaleInMiliseconds">unit_timescale_in_miliseconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#unit_timescale_in_miliseconds MediaAssetFilter#unit_timescale_in_miliseconds}. |

---

##### `end_in_units`<sup>Optional</sup> <a name="end_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.endInUnits"></a>

```python
end_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#end_in_units MediaAssetFilter#end_in_units}.

---

##### `force_end`<sup>Optional</sup> <a name="force_end" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.forceEnd"></a>

```python
force_end: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#force_end MediaAssetFilter#force_end}.

---

##### `live_backoff_in_units`<sup>Optional</sup> <a name="live_backoff_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.liveBackoffInUnits"></a>

```python
live_backoff_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#live_backoff_in_units MediaAssetFilter#live_backoff_in_units}.

---

##### `presentation_window_in_units`<sup>Optional</sup> <a name="presentation_window_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.presentationWindowInUnits"></a>

```python
presentation_window_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#presentation_window_in_units MediaAssetFilter#presentation_window_in_units}.

---

##### `start_in_units`<sup>Optional</sup> <a name="start_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.startInUnits"></a>

```python
start_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#start_in_units MediaAssetFilter#start_in_units}.

---

##### `unit_timescale_in_miliseconds`<sup>Optional</sup> <a name="unit_timescale_in_miliseconds" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.unitTimescaleInMiliseconds"></a>

```python
unit_timescale_in_miliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#unit_timescale_in_miliseconds MediaAssetFilter#unit_timescale_in_miliseconds}.

---

### MediaAssetFilterTimeouts <a name="MediaAssetFilterTimeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#create MediaAssetFilter#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#delete MediaAssetFilter#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#read MediaAssetFilter#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#update MediaAssetFilter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#create MediaAssetFilter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#delete MediaAssetFilter#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#read MediaAssetFilter#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#update MediaAssetFilter#update}.

---

### MediaAssetFilterTrackSelection <a name="MediaAssetFilterTrackSelection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilterTrackSelection(
  condition: typing.Union[IResolvable, typing.List[MediaAssetFilterTrackSelectionCondition]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection.property.condition">condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>]]</code> | condition block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection.property.condition"></a>

```python
condition: typing.Union[IResolvable, typing.List[MediaAssetFilterTrackSelectionCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>]]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#condition MediaAssetFilter#condition}

---

### MediaAssetFilterTrackSelectionCondition <a name="MediaAssetFilterTrackSelectionCondition" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilterTrackSelectionCondition(
  operation: str = None,
  property: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.operation">operation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#operation MediaAssetFilter#operation}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.property">property</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#property MediaAssetFilter#property}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#value MediaAssetFilter#value}. |

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.operation"></a>

```python
operation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#operation MediaAssetFilter#operation}.

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.property"></a>

```python
property: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#property MediaAssetFilter#property}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_asset_filter#value MediaAssetFilter#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaAssetFilterPresentationTimeRangeOutputReference <a name="MediaAssetFilterPresentationTimeRangeOutputReference" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetEndInUnits">reset_end_in_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetForceEnd">reset_force_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetLiveBackoffInUnits">reset_live_backoff_in_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetPresentationWindowInUnits">reset_presentation_window_in_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetStartInUnits">reset_start_in_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetUnitTimescaleInMiliseconds">reset_unit_timescale_in_miliseconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_in_units` <a name="reset_end_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetEndInUnits"></a>

```python
def reset_end_in_units() -> None
```

##### `reset_force_end` <a name="reset_force_end" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetForceEnd"></a>

```python
def reset_force_end() -> None
```

##### `reset_live_backoff_in_units` <a name="reset_live_backoff_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetLiveBackoffInUnits"></a>

```python
def reset_live_backoff_in_units() -> None
```

##### `reset_presentation_window_in_units` <a name="reset_presentation_window_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetPresentationWindowInUnits"></a>

```python
def reset_presentation_window_in_units() -> None
```

##### `reset_start_in_units` <a name="reset_start_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetStartInUnits"></a>

```python
def reset_start_in_units() -> None
```

##### `reset_unit_timescale_in_miliseconds` <a name="reset_unit_timescale_in_miliseconds" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetUnitTimescaleInMiliseconds"></a>

```python
def reset_unit_timescale_in_miliseconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.endInUnitsInput">end_in_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.forceEndInput">force_end_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnitsInput">live_backoff_in_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnitsInput">presentation_window_in_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.startInUnitsInput">start_in_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMilisecondsInput">unit_timescale_in_miliseconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.endInUnits">end_in_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.forceEnd">force_end</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnits">live_backoff_in_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnits">presentation_window_in_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.startInUnits">start_in_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMiliseconds">unit_timescale_in_miliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_in_units_input`<sup>Optional</sup> <a name="end_in_units_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.endInUnitsInput"></a>

```python
end_in_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `force_end_input`<sup>Optional</sup> <a name="force_end_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.forceEndInput"></a>

```python
force_end_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `live_backoff_in_units_input`<sup>Optional</sup> <a name="live_backoff_in_units_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnitsInput"></a>

```python
live_backoff_in_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `presentation_window_in_units_input`<sup>Optional</sup> <a name="presentation_window_in_units_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnitsInput"></a>

```python
presentation_window_in_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_in_units_input`<sup>Optional</sup> <a name="start_in_units_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.startInUnitsInput"></a>

```python
start_in_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_timescale_in_miliseconds_input`<sup>Optional</sup> <a name="unit_timescale_in_miliseconds_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMilisecondsInput"></a>

```python
unit_timescale_in_miliseconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_in_units`<sup>Required</sup> <a name="end_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.endInUnits"></a>

```python
end_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `force_end`<sup>Required</sup> <a name="force_end" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.forceEnd"></a>

```python
force_end: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `live_backoff_in_units`<sup>Required</sup> <a name="live_backoff_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnits"></a>

```python
live_backoff_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `presentation_window_in_units`<sup>Required</sup> <a name="presentation_window_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnits"></a>

```python
presentation_window_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_in_units`<sup>Required</sup> <a name="start_in_units" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.startInUnits"></a>

```python
start_in_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_timescale_in_miliseconds`<sup>Required</sup> <a name="unit_timescale_in_miliseconds" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMiliseconds"></a>

```python
unit_timescale_in_miliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.internalValue"></a>

```python
internal_value: MediaAssetFilterPresentationTimeRange
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a>

---


### MediaAssetFilterTimeoutsOutputReference <a name="MediaAssetFilterTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaAssetFilterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>]

---


### MediaAssetFilterTrackSelectionConditionList <a name="MediaAssetFilterTrackSelectionConditionList" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaAssetFilterTrackSelectionConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaAssetFilterTrackSelectionCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>]]

---


### MediaAssetFilterTrackSelectionConditionOutputReference <a name="MediaAssetFilterTrackSelectionConditionOutputReference" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetOperation">reset_operation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetProperty">reset_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operation` <a name="reset_operation" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetOperation"></a>

```python
def reset_operation() -> None
```

##### `reset_property` <a name="reset_property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetProperty"></a>

```python
def reset_property() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.propertyInput">property_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.property">property</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `property_input`<sup>Optional</sup> <a name="property_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.propertyInput"></a>

```python
property_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.property"></a>

```python
property: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaAssetFilterTrackSelectionCondition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>]

---


### MediaAssetFilterTrackSelectionList <a name="MediaAssetFilterTrackSelectionList" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilterTrackSelectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaAssetFilterTrackSelectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaAssetFilterTrackSelection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>]]

---


### MediaAssetFilterTrackSelectionOutputReference <a name="MediaAssetFilterTrackSelectionOutputReference" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_asset_filter

mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.putCondition">put_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.putCondition"></a>

```python
def put_condition(
  value: typing.Union[IResolvable, typing.List[MediaAssetFilterTrackSelectionCondition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.putCondition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList">MediaAssetFilterTrackSelectionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.conditionInput">condition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.condition"></a>

```python
condition: MediaAssetFilterTrackSelectionConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList">MediaAssetFilterTrackSelectionConditionList</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.conditionInput"></a>

```python
condition_input: typing.Union[IResolvable, typing.List[MediaAssetFilterTrackSelectionCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaAssetFilterTrackSelection]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>]

---



