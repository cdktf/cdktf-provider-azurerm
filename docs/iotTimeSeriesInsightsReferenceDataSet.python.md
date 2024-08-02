# `iotTimeSeriesInsightsReferenceDataSet` Submodule <a name="`iotTimeSeriesInsightsReferenceDataSet` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsReferenceDataSet <a name="IotTimeSeriesInsightsReferenceDataSet" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set azurerm_iot_time_series_insights_reference_data_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_reference_data_set

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_property: typing.Union[IResolvable, typing.List[IotTimeSeriesInsightsReferenceDataSetKeyProperty]],
  location: str,
  name: str,
  time_series_insights_environment_id: str,
  data_string_comparison_behavior: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: IotTimeSeriesInsightsReferenceDataSetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.keyProperty">key_property</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>]]</code> | key_property block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#location IotTimeSeriesInsightsReferenceDataSet#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#name IotTimeSeriesInsightsReferenceDataSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.timeSeriesInsightsEnvironmentId">time_series_insights_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#time_series_insights_environment_id IotTimeSeriesInsightsReferenceDataSet#time_series_insights_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.dataStringComparisonBehavior">data_string_comparison_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#data_string_comparison_behavior IotTimeSeriesInsightsReferenceDataSet#data_string_comparison_behavior}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#id IotTimeSeriesInsightsReferenceDataSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#tags IotTimeSeriesInsightsReferenceDataSet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_property`<sup>Required</sup> <a name="key_property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.keyProperty"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>]]

key_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#key_property IotTimeSeriesInsightsReferenceDataSet#key_property}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#location IotTimeSeriesInsightsReferenceDataSet#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#name IotTimeSeriesInsightsReferenceDataSet#name}.

---

##### `time_series_insights_environment_id`<sup>Required</sup> <a name="time_series_insights_environment_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.timeSeriesInsightsEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#time_series_insights_environment_id IotTimeSeriesInsightsReferenceDataSet#time_series_insights_environment_id}.

---

##### `data_string_comparison_behavior`<sup>Optional</sup> <a name="data_string_comparison_behavior" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.dataStringComparisonBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#data_string_comparison_behavior IotTimeSeriesInsightsReferenceDataSet#data_string_comparison_behavior}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#id IotTimeSeriesInsightsReferenceDataSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#tags IotTimeSeriesInsightsReferenceDataSet#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#timeouts IotTimeSeriesInsightsReferenceDataSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putKeyProperty">put_key_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetDataStringComparisonBehavior">reset_data_string_comparison_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_key_property` <a name="put_key_property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putKeyProperty"></a>

```python
def put_key_property(
  value: typing.Union[IResolvable, typing.List[IotTimeSeriesInsightsReferenceDataSetKeyProperty]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putKeyProperty.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#create IotTimeSeriesInsightsReferenceDataSet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#delete IotTimeSeriesInsightsReferenceDataSet#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#read IotTimeSeriesInsightsReferenceDataSet#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#update IotTimeSeriesInsightsReferenceDataSet#update}.

---

##### `reset_data_string_comparison_behavior` <a name="reset_data_string_comparison_behavior" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetDataStringComparisonBehavior"></a>

```python
def reset_data_string_comparison_behavior() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IotTimeSeriesInsightsReferenceDataSet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_reference_data_set

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_reference_data_set

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_reference_data_set

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_reference_data_set

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IotTimeSeriesInsightsReferenceDataSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotTimeSeriesInsightsReferenceDataSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotTimeSeriesInsightsReferenceDataSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IotTimeSeriesInsightsReferenceDataSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.keyProperty">key_property</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList">IotTimeSeriesInsightsReferenceDataSetKeyPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference">IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.dataStringComparisonBehaviorInput">data_string_comparison_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.keyPropertyInput">key_property_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeSeriesInsightsEnvironmentIdInput">time_series_insights_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.dataStringComparisonBehavior">data_string_comparison_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeSeriesInsightsEnvironmentId">time_series_insights_environment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_property`<sup>Required</sup> <a name="key_property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.keyProperty"></a>

```python
key_property: IotTimeSeriesInsightsReferenceDataSetKeyPropertyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList">IotTimeSeriesInsightsReferenceDataSetKeyPropertyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeouts"></a>

```python
timeouts: IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference">IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference</a>

---

##### `data_string_comparison_behavior_input`<sup>Optional</sup> <a name="data_string_comparison_behavior_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.dataStringComparisonBehaviorInput"></a>

```python
data_string_comparison_behavior_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_property_input`<sup>Optional</sup> <a name="key_property_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.keyPropertyInput"></a>

```python
key_property_input: typing.Union[IResolvable, typing.List[IotTimeSeriesInsightsReferenceDataSetKeyProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>]]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IotTimeSeriesInsightsReferenceDataSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a>]

---

##### `time_series_insights_environment_id_input`<sup>Optional</sup> <a name="time_series_insights_environment_id_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeSeriesInsightsEnvironmentIdInput"></a>

```python
time_series_insights_environment_id_input: str
```

- *Type:* str

---

##### `data_string_comparison_behavior`<sup>Required</sup> <a name="data_string_comparison_behavior" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.dataStringComparisonBehavior"></a>

```python
data_string_comparison_behavior: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `time_series_insights_environment_id`<sup>Required</sup> <a name="time_series_insights_environment_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.timeSeriesInsightsEnvironmentId"></a>

```python
time_series_insights_environment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsReferenceDataSetConfig <a name="IotTimeSeriesInsightsReferenceDataSetConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_reference_data_set

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_property: typing.Union[IResolvable, typing.List[IotTimeSeriesInsightsReferenceDataSetKeyProperty]],
  location: str,
  name: str,
  time_series_insights_environment_id: str,
  data_string_comparison_behavior: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: IotTimeSeriesInsightsReferenceDataSetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.keyProperty">key_property</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>]]</code> | key_property block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#location IotTimeSeriesInsightsReferenceDataSet#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#name IotTimeSeriesInsightsReferenceDataSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.timeSeriesInsightsEnvironmentId">time_series_insights_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#time_series_insights_environment_id IotTimeSeriesInsightsReferenceDataSet#time_series_insights_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.dataStringComparisonBehavior">data_string_comparison_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#data_string_comparison_behavior IotTimeSeriesInsightsReferenceDataSet#data_string_comparison_behavior}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#id IotTimeSeriesInsightsReferenceDataSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#tags IotTimeSeriesInsightsReferenceDataSet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_property`<sup>Required</sup> <a name="key_property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.keyProperty"></a>

```python
key_property: typing.Union[IResolvable, typing.List[IotTimeSeriesInsightsReferenceDataSetKeyProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>]]

key_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#key_property IotTimeSeriesInsightsReferenceDataSet#key_property}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#location IotTimeSeriesInsightsReferenceDataSet#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#name IotTimeSeriesInsightsReferenceDataSet#name}.

---

##### `time_series_insights_environment_id`<sup>Required</sup> <a name="time_series_insights_environment_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.timeSeriesInsightsEnvironmentId"></a>

```python
time_series_insights_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#time_series_insights_environment_id IotTimeSeriesInsightsReferenceDataSet#time_series_insights_environment_id}.

---

##### `data_string_comparison_behavior`<sup>Optional</sup> <a name="data_string_comparison_behavior" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.dataStringComparisonBehavior"></a>

```python
data_string_comparison_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#data_string_comparison_behavior IotTimeSeriesInsightsReferenceDataSet#data_string_comparison_behavior}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#id IotTimeSeriesInsightsReferenceDataSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#tags IotTimeSeriesInsightsReferenceDataSet#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetConfig.property.timeouts"></a>

```python
timeouts: IotTimeSeriesInsightsReferenceDataSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#timeouts IotTimeSeriesInsightsReferenceDataSet#timeouts}

---

### IotTimeSeriesInsightsReferenceDataSetKeyProperty <a name="IotTimeSeriesInsightsReferenceDataSetKeyProperty" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_reference_data_set

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty(
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#name IotTimeSeriesInsightsReferenceDataSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#type IotTimeSeriesInsightsReferenceDataSet#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#name IotTimeSeriesInsightsReferenceDataSet#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#type IotTimeSeriesInsightsReferenceDataSet#type}.

---

### IotTimeSeriesInsightsReferenceDataSetTimeouts <a name="IotTimeSeriesInsightsReferenceDataSetTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_reference_data_set

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#create IotTimeSeriesInsightsReferenceDataSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#delete IotTimeSeriesInsightsReferenceDataSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#read IotTimeSeriesInsightsReferenceDataSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#update IotTimeSeriesInsightsReferenceDataSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#create IotTimeSeriesInsightsReferenceDataSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#delete IotTimeSeriesInsightsReferenceDataSet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#read IotTimeSeriesInsightsReferenceDataSet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/iot_time_series_insights_reference_data_set#update IotTimeSeriesInsightsReferenceDataSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsReferenceDataSetKeyPropertyList <a name="IotTimeSeriesInsightsReferenceDataSetKeyPropertyList" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_reference_data_set

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IotTimeSeriesInsightsReferenceDataSetKeyProperty]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>]]

---


### IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference <a name="IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_reference_data_set

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyPropertyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IotTimeSeriesInsightsReferenceDataSetKeyProperty]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetKeyProperty">IotTimeSeriesInsightsReferenceDataSetKeyProperty</a>]

---


### IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference <a name="IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_reference_data_set

iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IotTimeSeriesInsightsReferenceDataSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsReferenceDataSet.IotTimeSeriesInsightsReferenceDataSetTimeouts">IotTimeSeriesInsightsReferenceDataSetTimeouts</a>]

---



