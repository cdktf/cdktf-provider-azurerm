# `azurerm_iot_time_series_insights_gen2_environment`

Refer to the Terraform Registory for docs: [`azurerm_iot_time_series_insights_gen2_environment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment).

# `iotTimeSeriesInsightsGen2Environment` Submodule <a name="`iotTimeSeriesInsightsGen2Environment` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsGen2Environment <a name="IotTimeSeriesInsightsGen2Environment" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment azurerm_iot_time_series_insights_gen2_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_gen2_environment

iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id_properties: typing.List[str],
  location: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  storage: IotTimeSeriesInsightsGen2EnvironmentStorage,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: IotTimeSeriesInsightsGen2EnvironmentTimeouts = None,
  warm_store_data_retention_time: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.idProperties">id_properties</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#id_properties IotTimeSeriesInsightsGen2Environment#id_properties}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#location IotTimeSeriesInsightsGen2Environment#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#resource_group_name IotTimeSeriesInsightsGen2Environment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#sku_name IotTimeSeriesInsightsGen2Environment#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.storage">storage</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#id IotTimeSeriesInsightsGen2Environment#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#tags IotTimeSeriesInsightsGen2Environment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts">IotTimeSeriesInsightsGen2EnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.warmStoreDataRetentionTime">warm_store_data_retention_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#warm_store_data_retention_time IotTimeSeriesInsightsGen2Environment#warm_store_data_retention_time}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_properties`<sup>Required</sup> <a name="id_properties" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.idProperties"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#id_properties IotTimeSeriesInsightsGen2Environment#id_properties}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#location IotTimeSeriesInsightsGen2Environment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#resource_group_name IotTimeSeriesInsightsGen2Environment#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#sku_name IotTimeSeriesInsightsGen2Environment#sku_name}.

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.storage"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#storage IotTimeSeriesInsightsGen2Environment#storage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#id IotTimeSeriesInsightsGen2Environment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#tags IotTimeSeriesInsightsGen2Environment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts">IotTimeSeriesInsightsGen2EnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#timeouts IotTimeSeriesInsightsGen2Environment#timeouts}

---

##### `warm_store_data_retention_time`<sup>Optional</sup> <a name="warm_store_data_retention_time" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.warmStoreDataRetentionTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#warm_store_data_retention_time IotTimeSeriesInsightsGen2Environment#warm_store_data_retention_time}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetWarmStoreDataRetentionTime">reset_warm_store_data_retention_time</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_storage` <a name="put_storage" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putStorage"></a>

```python
def put_storage(
  key: str,
  name: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putStorage.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#key IotTimeSeriesInsightsGen2Environment#key}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putStorage.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#create IotTimeSeriesInsightsGen2Environment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#delete IotTimeSeriesInsightsGen2Environment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#read IotTimeSeriesInsightsGen2Environment#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#update IotTimeSeriesInsightsGen2Environment#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_warm_store_data_retention_time` <a name="reset_warm_store_data_retention_time" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetWarmStoreDataRetentionTime"></a>

```python
def reset_warm_store_data_retention_time() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_gen2_environment

iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_gen2_environment

iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_gen2_environment

iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.dataAccessFqdn">data_access_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference">IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference">IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idPropertiesInput">id_properties_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.storageInput">storage_input</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts">IotTimeSeriesInsightsGen2EnvironmentTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.warmStoreDataRetentionTimeInput">warm_store_data_retention_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idProperties">id_properties</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.warmStoreDataRetentionTime">warm_store_data_retention_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_access_fqdn`<sup>Required</sup> <a name="data_access_fqdn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.dataAccessFqdn"></a>

```python
data_access_fqdn: str
```

- *Type:* str

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.storage"></a>

```python
storage: IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference">IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.timeouts"></a>

```python
timeouts: IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference">IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id_properties_input`<sup>Optional</sup> <a name="id_properties_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idPropertiesInput"></a>

```python
id_properties_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.storageInput"></a>

```python
storage_input: IotTimeSeriesInsightsGen2EnvironmentStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IotTimeSeriesInsightsGen2EnvironmentTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts">IotTimeSeriesInsightsGen2EnvironmentTimeouts</a>, cdktf.IResolvable]

---

##### `warm_store_data_retention_time_input`<sup>Optional</sup> <a name="warm_store_data_retention_time_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.warmStoreDataRetentionTimeInput"></a>

```python
warm_store_data_retention_time_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `id_properties`<sup>Required</sup> <a name="id_properties" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idProperties"></a>

```python
id_properties: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `warm_store_data_retention_time`<sup>Required</sup> <a name="warm_store_data_retention_time" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.warmStoreDataRetentionTime"></a>

```python
warm_store_data_retention_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsGen2EnvironmentConfig <a name="IotTimeSeriesInsightsGen2EnvironmentConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_gen2_environment

iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id_properties: typing.List[str],
  location: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  storage: IotTimeSeriesInsightsGen2EnvironmentStorage,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: IotTimeSeriesInsightsGen2EnvironmentTimeouts = None,
  warm_store_data_retention_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.idProperties">id_properties</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#id_properties IotTimeSeriesInsightsGen2Environment#id_properties}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#location IotTimeSeriesInsightsGen2Environment#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#resource_group_name IotTimeSeriesInsightsGen2Environment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#sku_name IotTimeSeriesInsightsGen2Environment#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#id IotTimeSeriesInsightsGen2Environment#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#tags IotTimeSeriesInsightsGen2Environment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts">IotTimeSeriesInsightsGen2EnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.warmStoreDataRetentionTime">warm_store_data_retention_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#warm_store_data_retention_time IotTimeSeriesInsightsGen2Environment#warm_store_data_retention_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_properties`<sup>Required</sup> <a name="id_properties" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.idProperties"></a>

```python
id_properties: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#id_properties IotTimeSeriesInsightsGen2Environment#id_properties}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#location IotTimeSeriesInsightsGen2Environment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#resource_group_name IotTimeSeriesInsightsGen2Environment#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#sku_name IotTimeSeriesInsightsGen2Environment#sku_name}.

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.storage"></a>

```python
storage: IotTimeSeriesInsightsGen2EnvironmentStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#storage IotTimeSeriesInsightsGen2Environment#storage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#id IotTimeSeriesInsightsGen2Environment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#tags IotTimeSeriesInsightsGen2Environment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.timeouts"></a>

```python
timeouts: IotTimeSeriesInsightsGen2EnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts">IotTimeSeriesInsightsGen2EnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#timeouts IotTimeSeriesInsightsGen2Environment#timeouts}

---

##### `warm_store_data_retention_time`<sup>Optional</sup> <a name="warm_store_data_retention_time" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.warmStoreDataRetentionTime"></a>

```python
warm_store_data_retention_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#warm_store_data_retention_time IotTimeSeriesInsightsGen2Environment#warm_store_data_retention_time}.

---

### IotTimeSeriesInsightsGen2EnvironmentStorage <a name="IotTimeSeriesInsightsGen2EnvironmentStorage" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_gen2_environment

iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage(
  key: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#key IotTimeSeriesInsightsGen2Environment#key}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#key IotTimeSeriesInsightsGen2Environment#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}.

---

### IotTimeSeriesInsightsGen2EnvironmentTimeouts <a name="IotTimeSeriesInsightsGen2EnvironmentTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_gen2_environment

iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#create IotTimeSeriesInsightsGen2Environment#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#delete IotTimeSeriesInsightsGen2Environment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#read IotTimeSeriesInsightsGen2Environment#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#update IotTimeSeriesInsightsGen2Environment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#create IotTimeSeriesInsightsGen2Environment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#delete IotTimeSeriesInsightsGen2Environment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#read IotTimeSeriesInsightsGen2Environment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iot_time_series_insights_gen2_environment#update IotTimeSeriesInsightsGen2Environment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference <a name="IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_gen2_environment

iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.internalValue"></a>

```python
internal_value: IotTimeSeriesInsightsGen2EnvironmentStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a>

---


### IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference <a name="IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_gen2_environment

iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts">IotTimeSeriesInsightsGen2EnvironmentTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IotTimeSeriesInsightsGen2EnvironmentTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts">IotTimeSeriesInsightsGen2EnvironmentTimeouts</a>, cdktf.IResolvable]

---



