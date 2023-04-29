# `azurerm_iot_time_series_insights_event_source_iothub`

Refer to the Terraform Registory for docs: [`azurerm_iot_time_series_insights_event_source_iothub`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub).

# `iotTimeSeriesInsightsEventSourceIothub` Submodule <a name="`iotTimeSeriesInsightsEventSourceIothub` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsEventSourceIothub <a name="IotTimeSeriesInsightsEventSourceIothub" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub azurerm_iot_time_series_insights_event_source_iothub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_event_source_iothub

iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  consumer_group_name: str,
  environment_id: str,
  event_source_resource_id: str,
  iothub_name: str,
  location: str,
  name: str,
  shared_access_key: str,
  shared_access_key_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: IotTimeSeriesInsightsEventSourceIothubTimeouts = None,
  timestamp_property_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.consumerGroupName">consumer_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#consumer_group_name IotTimeSeriesInsightsEventSourceIothub#consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#environment_id IotTimeSeriesInsightsEventSourceIothub#environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.eventSourceResourceId">event_source_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#event_source_resource_id IotTimeSeriesInsightsEventSourceIothub#event_source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.iothubName">iothub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#iothub_name IotTimeSeriesInsightsEventSourceIothub#iothub_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#location IotTimeSeriesInsightsEventSourceIothub#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#name IotTimeSeriesInsightsEventSourceIothub#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.sharedAccessKey">shared_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#shared_access_key IotTimeSeriesInsightsEventSourceIothub#shared_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.sharedAccessKeyName">shared_access_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#shared_access_key_name IotTimeSeriesInsightsEventSourceIothub#shared_access_key_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#id IotTimeSeriesInsightsEventSourceIothub#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#tags IotTimeSeriesInsightsEventSourceIothub#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts">IotTimeSeriesInsightsEventSourceIothubTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.timestampPropertyName">timestamp_property_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#timestamp_property_name IotTimeSeriesInsightsEventSourceIothub#timestamp_property_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `consumer_group_name`<sup>Required</sup> <a name="consumer_group_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.consumerGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#consumer_group_name IotTimeSeriesInsightsEventSourceIothub#consumer_group_name}.

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.environmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#environment_id IotTimeSeriesInsightsEventSourceIothub#environment_id}.

---

##### `event_source_resource_id`<sup>Required</sup> <a name="event_source_resource_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.eventSourceResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#event_source_resource_id IotTimeSeriesInsightsEventSourceIothub#event_source_resource_id}.

---

##### `iothub_name`<sup>Required</sup> <a name="iothub_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.iothubName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#iothub_name IotTimeSeriesInsightsEventSourceIothub#iothub_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#location IotTimeSeriesInsightsEventSourceIothub#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#name IotTimeSeriesInsightsEventSourceIothub#name}.

---

##### `shared_access_key`<sup>Required</sup> <a name="shared_access_key" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.sharedAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#shared_access_key IotTimeSeriesInsightsEventSourceIothub#shared_access_key}.

---

##### `shared_access_key_name`<sup>Required</sup> <a name="shared_access_key_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.sharedAccessKeyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#shared_access_key_name IotTimeSeriesInsightsEventSourceIothub#shared_access_key_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#id IotTimeSeriesInsightsEventSourceIothub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#tags IotTimeSeriesInsightsEventSourceIothub#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts">IotTimeSeriesInsightsEventSourceIothubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#timeouts IotTimeSeriesInsightsEventSourceIothub#timeouts}

---

##### `timestamp_property_name`<sup>Optional</sup> <a name="timestamp_property_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.timestampPropertyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#timestamp_property_name IotTimeSeriesInsightsEventSourceIothub#timestamp_property_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTimestampPropertyName">reset_timestamp_property_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#create IotTimeSeriesInsightsEventSourceIothub#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#delete IotTimeSeriesInsightsEventSourceIothub#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#read IotTimeSeriesInsightsEventSourceIothub#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#update IotTimeSeriesInsightsEventSourceIothub#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timestamp_property_name` <a name="reset_timestamp_property_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTimestampPropertyName"></a>

```python
def reset_timestamp_property_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_event_source_iothub

iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_event_source_iothub

iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_event_source_iothub

iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference">IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.consumerGroupNameInput">consumer_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.eventSourceResourceIdInput">event_source_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.iothubNameInput">iothub_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyInput">shared_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyNameInput">shared_access_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts">IotTimeSeriesInsightsEventSourceIothubTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timestampPropertyNameInput">timestamp_property_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.consumerGroupName">consumer_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.eventSourceResourceId">event_source_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.iothubName">iothub_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKey">shared_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyName">shared_access_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timestampPropertyName">timestamp_property_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timeouts"></a>

```python
timeouts: IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference">IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference</a>

---

##### `consumer_group_name_input`<sup>Optional</sup> <a name="consumer_group_name_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.consumerGroupNameInput"></a>

```python
consumer_group_name_input: str
```

- *Type:* str

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `event_source_resource_id_input`<sup>Optional</sup> <a name="event_source_resource_id_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.eventSourceResourceIdInput"></a>

```python
event_source_resource_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iothub_name_input`<sup>Optional</sup> <a name="iothub_name_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.iothubNameInput"></a>

```python
iothub_name_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `shared_access_key_input`<sup>Optional</sup> <a name="shared_access_key_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyInput"></a>

```python
shared_access_key_input: str
```

- *Type:* str

---

##### `shared_access_key_name_input`<sup>Optional</sup> <a name="shared_access_key_name_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyNameInput"></a>

```python
shared_access_key_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IotTimeSeriesInsightsEventSourceIothubTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts">IotTimeSeriesInsightsEventSourceIothubTimeouts</a>, cdktf.IResolvable]

---

##### `timestamp_property_name_input`<sup>Optional</sup> <a name="timestamp_property_name_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timestampPropertyNameInput"></a>

```python
timestamp_property_name_input: str
```

- *Type:* str

---

##### `consumer_group_name`<sup>Required</sup> <a name="consumer_group_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.consumerGroupName"></a>

```python
consumer_group_name: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `event_source_resource_id`<sup>Required</sup> <a name="event_source_resource_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.eventSourceResourceId"></a>

```python
event_source_resource_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iothub_name`<sup>Required</sup> <a name="iothub_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.iothubName"></a>

```python
iothub_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `shared_access_key`<sup>Required</sup> <a name="shared_access_key" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKey"></a>

```python
shared_access_key: str
```

- *Type:* str

---

##### `shared_access_key_name`<sup>Required</sup> <a name="shared_access_key_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyName"></a>

```python
shared_access_key_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timestamp_property_name`<sup>Required</sup> <a name="timestamp_property_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timestampPropertyName"></a>

```python
timestamp_property_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsEventSourceIothubConfig <a name="IotTimeSeriesInsightsEventSourceIothubConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_event_source_iothub

iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  consumer_group_name: str,
  environment_id: str,
  event_source_resource_id: str,
  iothub_name: str,
  location: str,
  name: str,
  shared_access_key: str,
  shared_access_key_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: IotTimeSeriesInsightsEventSourceIothubTimeouts = None,
  timestamp_property_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.consumerGroupName">consumer_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#consumer_group_name IotTimeSeriesInsightsEventSourceIothub#consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#environment_id IotTimeSeriesInsightsEventSourceIothub#environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.eventSourceResourceId">event_source_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#event_source_resource_id IotTimeSeriesInsightsEventSourceIothub#event_source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.iothubName">iothub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#iothub_name IotTimeSeriesInsightsEventSourceIothub#iothub_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#location IotTimeSeriesInsightsEventSourceIothub#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#name IotTimeSeriesInsightsEventSourceIothub#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.sharedAccessKey">shared_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#shared_access_key IotTimeSeriesInsightsEventSourceIothub#shared_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.sharedAccessKeyName">shared_access_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#shared_access_key_name IotTimeSeriesInsightsEventSourceIothub#shared_access_key_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#id IotTimeSeriesInsightsEventSourceIothub#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#tags IotTimeSeriesInsightsEventSourceIothub#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts">IotTimeSeriesInsightsEventSourceIothubTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.timestampPropertyName">timestamp_property_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#timestamp_property_name IotTimeSeriesInsightsEventSourceIothub#timestamp_property_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `consumer_group_name`<sup>Required</sup> <a name="consumer_group_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.consumerGroupName"></a>

```python
consumer_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#consumer_group_name IotTimeSeriesInsightsEventSourceIothub#consumer_group_name}.

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#environment_id IotTimeSeriesInsightsEventSourceIothub#environment_id}.

---

##### `event_source_resource_id`<sup>Required</sup> <a name="event_source_resource_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.eventSourceResourceId"></a>

```python
event_source_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#event_source_resource_id IotTimeSeriesInsightsEventSourceIothub#event_source_resource_id}.

---

##### `iothub_name`<sup>Required</sup> <a name="iothub_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.iothubName"></a>

```python
iothub_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#iothub_name IotTimeSeriesInsightsEventSourceIothub#iothub_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#location IotTimeSeriesInsightsEventSourceIothub#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#name IotTimeSeriesInsightsEventSourceIothub#name}.

---

##### `shared_access_key`<sup>Required</sup> <a name="shared_access_key" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.sharedAccessKey"></a>

```python
shared_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#shared_access_key IotTimeSeriesInsightsEventSourceIothub#shared_access_key}.

---

##### `shared_access_key_name`<sup>Required</sup> <a name="shared_access_key_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.sharedAccessKeyName"></a>

```python
shared_access_key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#shared_access_key_name IotTimeSeriesInsightsEventSourceIothub#shared_access_key_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#id IotTimeSeriesInsightsEventSourceIothub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#tags IotTimeSeriesInsightsEventSourceIothub#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.timeouts"></a>

```python
timeouts: IotTimeSeriesInsightsEventSourceIothubTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts">IotTimeSeriesInsightsEventSourceIothubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#timeouts IotTimeSeriesInsightsEventSourceIothub#timeouts}

---

##### `timestamp_property_name`<sup>Optional</sup> <a name="timestamp_property_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.timestampPropertyName"></a>

```python
timestamp_property_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#timestamp_property_name IotTimeSeriesInsightsEventSourceIothub#timestamp_property_name}.

---

### IotTimeSeriesInsightsEventSourceIothubTimeouts <a name="IotTimeSeriesInsightsEventSourceIothubTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_event_source_iothub

iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#create IotTimeSeriesInsightsEventSourceIothub#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#delete IotTimeSeriesInsightsEventSourceIothub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#read IotTimeSeriesInsightsEventSourceIothub#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#update IotTimeSeriesInsightsEventSourceIothub#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#create IotTimeSeriesInsightsEventSourceIothub#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#delete IotTimeSeriesInsightsEventSourceIothub#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#read IotTimeSeriesInsightsEventSourceIothub#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_event_source_iothub#update IotTimeSeriesInsightsEventSourceIothub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference <a name="IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_event_source_iothub

iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts">IotTimeSeriesInsightsEventSourceIothubTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IotTimeSeriesInsightsEventSourceIothubTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts">IotTimeSeriesInsightsEventSourceIothubTimeouts</a>, cdktf.IResolvable]

---



