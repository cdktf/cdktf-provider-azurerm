# `mediaLiveEventOutput` Submodule <a name="`mediaLiveEventOutput` Submodule" id="@cdktf/provider-azurerm.mediaLiveEventOutput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaLiveEventOutput <a name="MediaLiveEventOutput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output azurerm_media_live_event_output}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event_output

mediaLiveEventOutput.MediaLiveEventOutput(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  archive_window_duration: str,
  asset_name: str,
  live_event_id: str,
  name: str,
  description: str = None,
  hls_fragments_per_ts_segment: typing.Union[int, float] = None,
  id: str = None,
  manifest_name: str = None,
  output_snap_time_in_seconds: typing.Union[int, float] = None,
  rewind_window_duration: str = None,
  timeouts: MediaLiveEventOutputTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.archiveWindowDuration">archive_window_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#archive_window_duration MediaLiveEventOutput#archive_window_duration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.assetName">asset_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#asset_name MediaLiveEventOutput#asset_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.liveEventId">live_event_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#live_event_id MediaLiveEventOutput#live_event_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#name MediaLiveEventOutput#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#description MediaLiveEventOutput#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.hlsFragmentsPerTsSegment">hls_fragments_per_ts_segment</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#hls_fragments_per_ts_segment MediaLiveEventOutput#hls_fragments_per_ts_segment}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#id MediaLiveEventOutput#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.manifestName">manifest_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#manifest_name MediaLiveEventOutput#manifest_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.outputSnapTimeInSeconds">output_snap_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#output_snap_time_in_seconds MediaLiveEventOutput#output_snap_time_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.rewindWindowDuration">rewind_window_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#rewind_window_duration MediaLiveEventOutput#rewind_window_duration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `archive_window_duration`<sup>Required</sup> <a name="archive_window_duration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.archiveWindowDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#archive_window_duration MediaLiveEventOutput#archive_window_duration}.

---

##### `asset_name`<sup>Required</sup> <a name="asset_name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.assetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#asset_name MediaLiveEventOutput#asset_name}.

---

##### `live_event_id`<sup>Required</sup> <a name="live_event_id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.liveEventId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#live_event_id MediaLiveEventOutput#live_event_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#name MediaLiveEventOutput#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#description MediaLiveEventOutput#description}.

---

##### `hls_fragments_per_ts_segment`<sup>Optional</sup> <a name="hls_fragments_per_ts_segment" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.hlsFragmentsPerTsSegment"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#hls_fragments_per_ts_segment MediaLiveEventOutput#hls_fragments_per_ts_segment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#id MediaLiveEventOutput#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manifest_name`<sup>Optional</sup> <a name="manifest_name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.manifestName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#manifest_name MediaLiveEventOutput#manifest_name}.

---

##### `output_snap_time_in_seconds`<sup>Optional</sup> <a name="output_snap_time_in_seconds" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.outputSnapTimeInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#output_snap_time_in_seconds MediaLiveEventOutput#output_snap_time_in_seconds}.

---

##### `rewind_window_duration`<sup>Optional</sup> <a name="rewind_window_duration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.rewindWindowDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#rewind_window_duration MediaLiveEventOutput#rewind_window_duration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#timeouts MediaLiveEventOutput#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetHlsFragmentsPerTsSegment">reset_hls_fragments_per_ts_segment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetManifestName">reset_manifest_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetOutputSnapTimeInSeconds">reset_output_snap_time_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetRewindWindowDuration">reset_rewind_window_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#create MediaLiveEventOutput#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#delete MediaLiveEventOutput#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#read MediaLiveEventOutput#read}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_hls_fragments_per_ts_segment` <a name="reset_hls_fragments_per_ts_segment" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetHlsFragmentsPerTsSegment"></a>

```python
def reset_hls_fragments_per_ts_segment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_manifest_name` <a name="reset_manifest_name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetManifestName"></a>

```python
def reset_manifest_name() -> None
```

##### `reset_output_snap_time_in_seconds` <a name="reset_output_snap_time_in_seconds" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetOutputSnapTimeInSeconds"></a>

```python
def reset_output_snap_time_in_seconds() -> None
```

##### `reset_rewind_window_duration` <a name="reset_rewind_window_duration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetRewindWindowDuration"></a>

```python
def reset_rewind_window_duration() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MediaLiveEventOutput resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event_output

mediaLiveEventOutput.MediaLiveEventOutput.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event_output

mediaLiveEventOutput.MediaLiveEventOutput.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event_output

mediaLiveEventOutput.MediaLiveEventOutput.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event_output

mediaLiveEventOutput.MediaLiveEventOutput.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MediaLiveEventOutput resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaLiveEventOutput to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaLiveEventOutput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaLiveEventOutput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference">MediaLiveEventOutputTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.archiveWindowDurationInput">archive_window_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.assetNameInput">asset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.hlsFragmentsPerTsSegmentInput">hls_fragments_per_ts_segment_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.liveEventIdInput">live_event_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.manifestNameInput">manifest_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.outputSnapTimeInSecondsInput">output_snap_time_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.rewindWindowDurationInput">rewind_window_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.archiveWindowDuration">archive_window_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.assetName">asset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.hlsFragmentsPerTsSegment">hls_fragments_per_ts_segment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.liveEventId">live_event_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.manifestName">manifest_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.outputSnapTimeInSeconds">output_snap_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.rewindWindowDuration">rewind_window_duration</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.timeouts"></a>

```python
timeouts: MediaLiveEventOutputTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference">MediaLiveEventOutputTimeoutsOutputReference</a>

---

##### `archive_window_duration_input`<sup>Optional</sup> <a name="archive_window_duration_input" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.archiveWindowDurationInput"></a>

```python
archive_window_duration_input: str
```

- *Type:* str

---

##### `asset_name_input`<sup>Optional</sup> <a name="asset_name_input" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.assetNameInput"></a>

```python
asset_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hls_fragments_per_ts_segment_input`<sup>Optional</sup> <a name="hls_fragments_per_ts_segment_input" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.hlsFragmentsPerTsSegmentInput"></a>

```python
hls_fragments_per_ts_segment_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `live_event_id_input`<sup>Optional</sup> <a name="live_event_id_input" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.liveEventIdInput"></a>

```python
live_event_id_input: str
```

- *Type:* str

---

##### `manifest_name_input`<sup>Optional</sup> <a name="manifest_name_input" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.manifestNameInput"></a>

```python
manifest_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_snap_time_in_seconds_input`<sup>Optional</sup> <a name="output_snap_time_in_seconds_input" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.outputSnapTimeInSecondsInput"></a>

```python
output_snap_time_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rewind_window_duration_input`<sup>Optional</sup> <a name="rewind_window_duration_input" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.rewindWindowDurationInput"></a>

```python
rewind_window_duration_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MediaLiveEventOutputTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a>]

---

##### `archive_window_duration`<sup>Required</sup> <a name="archive_window_duration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.archiveWindowDuration"></a>

```python
archive_window_duration: str
```

- *Type:* str

---

##### `asset_name`<sup>Required</sup> <a name="asset_name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.assetName"></a>

```python
asset_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hls_fragments_per_ts_segment`<sup>Required</sup> <a name="hls_fragments_per_ts_segment" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.hlsFragmentsPerTsSegment"></a>

```python
hls_fragments_per_ts_segment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `live_event_id`<sup>Required</sup> <a name="live_event_id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.liveEventId"></a>

```python
live_event_id: str
```

- *Type:* str

---

##### `manifest_name`<sup>Required</sup> <a name="manifest_name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_snap_time_in_seconds`<sup>Required</sup> <a name="output_snap_time_in_seconds" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.outputSnapTimeInSeconds"></a>

```python
output_snap_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rewind_window_duration`<sup>Required</sup> <a name="rewind_window_duration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.rewindWindowDuration"></a>

```python
rewind_window_duration: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaLiveEventOutputConfig <a name="MediaLiveEventOutputConfig" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event_output

mediaLiveEventOutput.MediaLiveEventOutputConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  archive_window_duration: str,
  asset_name: str,
  live_event_id: str,
  name: str,
  description: str = None,
  hls_fragments_per_ts_segment: typing.Union[int, float] = None,
  id: str = None,
  manifest_name: str = None,
  output_snap_time_in_seconds: typing.Union[int, float] = None,
  rewind_window_duration: str = None,
  timeouts: MediaLiveEventOutputTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.archiveWindowDuration">archive_window_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#archive_window_duration MediaLiveEventOutput#archive_window_duration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.assetName">asset_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#asset_name MediaLiveEventOutput#asset_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.liveEventId">live_event_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#live_event_id MediaLiveEventOutput#live_event_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#name MediaLiveEventOutput#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#description MediaLiveEventOutput#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.hlsFragmentsPerTsSegment">hls_fragments_per_ts_segment</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#hls_fragments_per_ts_segment MediaLiveEventOutput#hls_fragments_per_ts_segment}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#id MediaLiveEventOutput#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.manifestName">manifest_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#manifest_name MediaLiveEventOutput#manifest_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.outputSnapTimeInSeconds">output_snap_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#output_snap_time_in_seconds MediaLiveEventOutput#output_snap_time_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.rewindWindowDuration">rewind_window_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#rewind_window_duration MediaLiveEventOutput#rewind_window_duration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `archive_window_duration`<sup>Required</sup> <a name="archive_window_duration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.archiveWindowDuration"></a>

```python
archive_window_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#archive_window_duration MediaLiveEventOutput#archive_window_duration}.

---

##### `asset_name`<sup>Required</sup> <a name="asset_name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.assetName"></a>

```python
asset_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#asset_name MediaLiveEventOutput#asset_name}.

---

##### `live_event_id`<sup>Required</sup> <a name="live_event_id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.liveEventId"></a>

```python
live_event_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#live_event_id MediaLiveEventOutput#live_event_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#name MediaLiveEventOutput#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#description MediaLiveEventOutput#description}.

---

##### `hls_fragments_per_ts_segment`<sup>Optional</sup> <a name="hls_fragments_per_ts_segment" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.hlsFragmentsPerTsSegment"></a>

```python
hls_fragments_per_ts_segment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#hls_fragments_per_ts_segment MediaLiveEventOutput#hls_fragments_per_ts_segment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#id MediaLiveEventOutput#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manifest_name`<sup>Optional</sup> <a name="manifest_name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#manifest_name MediaLiveEventOutput#manifest_name}.

---

##### `output_snap_time_in_seconds`<sup>Optional</sup> <a name="output_snap_time_in_seconds" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.outputSnapTimeInSeconds"></a>

```python
output_snap_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#output_snap_time_in_seconds MediaLiveEventOutput#output_snap_time_in_seconds}.

---

##### `rewind_window_duration`<sup>Optional</sup> <a name="rewind_window_duration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.rewindWindowDuration"></a>

```python
rewind_window_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#rewind_window_duration MediaLiveEventOutput#rewind_window_duration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.timeouts"></a>

```python
timeouts: MediaLiveEventOutputTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#timeouts MediaLiveEventOutput#timeouts}

---

### MediaLiveEventOutputTimeouts <a name="MediaLiveEventOutputTimeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event_output

mediaLiveEventOutput.MediaLiveEventOutputTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#create MediaLiveEventOutput#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#delete MediaLiveEventOutput#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#read MediaLiveEventOutput#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#create MediaLiveEventOutput#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#delete MediaLiveEventOutput#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event_output#read MediaLiveEventOutput#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaLiveEventOutputTimeoutsOutputReference <a name="MediaLiveEventOutputTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_live_event_output

mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaLiveEventOutputTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a>]

---



