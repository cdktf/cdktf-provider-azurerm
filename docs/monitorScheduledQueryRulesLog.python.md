# `azurerm_monitor_scheduled_query_rules_log`

Refer to the Terraform Registory for docs: [`azurerm_monitor_scheduled_query_rules_log`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log).

# `monitorScheduledQueryRulesLog` Submodule <a name="`monitorScheduledQueryRulesLog` Submodule" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorScheduledQueryRulesLog <a name="MonitorScheduledQueryRulesLog" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log azurerm_monitor_scheduled_query_rules_log}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_scheduled_query_rules_log

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  criteria: MonitorScheduledQueryRulesLogCriteria,
  data_source_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  authorized_resource_ids: typing.List[str] = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MonitorScheduledQueryRulesLogTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.dataSourceId">data_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#data_source_id MonitorScheduledQueryRulesLog#data_source_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#location MonitorScheduledQueryRulesLog#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#name MonitorScheduledQueryRulesLog#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#resource_group_name MonitorScheduledQueryRulesLog#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.authorizedResourceIds">authorized_resource_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#authorized_resource_ids MonitorScheduledQueryRulesLog#authorized_resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#description MonitorScheduledQueryRulesLog#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#enabled MonitorScheduledQueryRulesLog#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#id MonitorScheduledQueryRulesLog#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#tags MonitorScheduledQueryRulesLog#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.criteria"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#criteria MonitorScheduledQueryRulesLog#criteria}

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.dataSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#data_source_id MonitorScheduledQueryRulesLog#data_source_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#location MonitorScheduledQueryRulesLog#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#name MonitorScheduledQueryRulesLog#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#resource_group_name MonitorScheduledQueryRulesLog#resource_group_name}.

---

##### `authorized_resource_ids`<sup>Optional</sup> <a name="authorized_resource_ids" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.authorizedResourceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#authorized_resource_ids MonitorScheduledQueryRulesLog#authorized_resource_ids}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#description MonitorScheduledQueryRulesLog#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#enabled MonitorScheduledQueryRulesLog#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#id MonitorScheduledQueryRulesLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#tags MonitorScheduledQueryRulesLog#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#timeouts MonitorScheduledQueryRulesLog#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putCriteria">put_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetAuthorizedResourceIds">reset_authorized_resource_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_criteria` <a name="put_criteria" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putCriteria"></a>

```python
def put_criteria(
  dimension: typing.Union[IResolvable, typing.List[MonitorScheduledQueryRulesLogCriteriaDimension]],
  metric_name: str
) -> None
```

###### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putCriteria.parameter.dimension"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>]]

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#dimension MonitorScheduledQueryRulesLog#dimension}

---

###### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putCriteria.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#metric_name MonitorScheduledQueryRulesLog#metric_name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#create MonitorScheduledQueryRulesLog#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#delete MonitorScheduledQueryRulesLog#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#read MonitorScheduledQueryRulesLog#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#update MonitorScheduledQueryRulesLog#update}.

---

##### `reset_authorized_resource_ids` <a name="reset_authorized_resource_ids" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetAuthorizedResourceIds"></a>

```python
def reset_authorized_resource_ids() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_scheduled_query_rules_log

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_scheduled_query_rules_log

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_scheduled_query_rules_log

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference">MonitorScheduledQueryRulesLogCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference">MonitorScheduledQueryRulesLogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.authorizedResourceIdsInput">authorized_resource_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.criteriaInput">criteria_input</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.dataSourceIdInput">data_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.authorizedResourceIds">authorized_resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.criteria"></a>

```python
criteria: MonitorScheduledQueryRulesLogCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference">MonitorScheduledQueryRulesLogCriteriaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.timeouts"></a>

```python
timeouts: MonitorScheduledQueryRulesLogTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference">MonitorScheduledQueryRulesLogTimeoutsOutputReference</a>

---

##### `authorized_resource_ids_input`<sup>Optional</sup> <a name="authorized_resource_ids_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.authorizedResourceIdsInput"></a>

```python
authorized_resource_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.criteriaInput"></a>

```python
criteria_input: MonitorScheduledQueryRulesLogCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a>

---

##### `data_source_id_input`<sup>Optional</sup> <a name="data_source_id_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.dataSourceIdInput"></a>

```python
data_source_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MonitorScheduledQueryRulesLogTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a>]

---

##### `authorized_resource_ids`<sup>Required</sup> <a name="authorized_resource_ids" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.authorizedResourceIds"></a>

```python
authorized_resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorScheduledQueryRulesLogConfig <a name="MonitorScheduledQueryRulesLogConfig" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_scheduled_query_rules_log

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  criteria: MonitorScheduledQueryRulesLogCriteria,
  data_source_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  authorized_resource_ids: typing.List[str] = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MonitorScheduledQueryRulesLogTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.dataSourceId">data_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#data_source_id MonitorScheduledQueryRulesLog#data_source_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#location MonitorScheduledQueryRulesLog#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#name MonitorScheduledQueryRulesLog#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#resource_group_name MonitorScheduledQueryRulesLog#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.authorizedResourceIds">authorized_resource_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#authorized_resource_ids MonitorScheduledQueryRulesLog#authorized_resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#description MonitorScheduledQueryRulesLog#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#enabled MonitorScheduledQueryRulesLog#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#id MonitorScheduledQueryRulesLog#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#tags MonitorScheduledQueryRulesLog#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.criteria"></a>

```python
criteria: MonitorScheduledQueryRulesLogCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#criteria MonitorScheduledQueryRulesLog#criteria}

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#data_source_id MonitorScheduledQueryRulesLog#data_source_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#location MonitorScheduledQueryRulesLog#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#name MonitorScheduledQueryRulesLog#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#resource_group_name MonitorScheduledQueryRulesLog#resource_group_name}.

---

##### `authorized_resource_ids`<sup>Optional</sup> <a name="authorized_resource_ids" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.authorizedResourceIds"></a>

```python
authorized_resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#authorized_resource_ids MonitorScheduledQueryRulesLog#authorized_resource_ids}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#description MonitorScheduledQueryRulesLog#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#enabled MonitorScheduledQueryRulesLog#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#id MonitorScheduledQueryRulesLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#tags MonitorScheduledQueryRulesLog#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.timeouts"></a>

```python
timeouts: MonitorScheduledQueryRulesLogTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#timeouts MonitorScheduledQueryRulesLog#timeouts}

---

### MonitorScheduledQueryRulesLogCriteria <a name="MonitorScheduledQueryRulesLogCriteria" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_scheduled_query_rules_log

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria(
  dimension: typing.Union[IResolvable, typing.List[MonitorScheduledQueryRulesLogCriteriaDimension]],
  metric_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria.property.dimension">dimension</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>]]</code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#metric_name MonitorScheduledQueryRulesLog#metric_name}. |

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria.property.dimension"></a>

```python
dimension: typing.Union[IResolvable, typing.List[MonitorScheduledQueryRulesLogCriteriaDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>]]

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#dimension MonitorScheduledQueryRulesLog#dimension}

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#metric_name MonitorScheduledQueryRulesLog#metric_name}.

---

### MonitorScheduledQueryRulesLogCriteriaDimension <a name="MonitorScheduledQueryRulesLogCriteriaDimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_scheduled_query_rules_log

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension(
  name: str,
  values: typing.List[str],
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#name MonitorScheduledQueryRulesLog#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#values MonitorScheduledQueryRulesLog#values}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#operator MonitorScheduledQueryRulesLog#operator}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#name MonitorScheduledQueryRulesLog#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#values MonitorScheduledQueryRulesLog#values}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#operator MonitorScheduledQueryRulesLog#operator}.

---

### MonitorScheduledQueryRulesLogTimeouts <a name="MonitorScheduledQueryRulesLogTimeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_scheduled_query_rules_log

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#create MonitorScheduledQueryRulesLog#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#delete MonitorScheduledQueryRulesLog#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#read MonitorScheduledQueryRulesLog#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#update MonitorScheduledQueryRulesLog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#create MonitorScheduledQueryRulesLog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#delete MonitorScheduledQueryRulesLog#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#read MonitorScheduledQueryRulesLog#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/monitor_scheduled_query_rules_log#update MonitorScheduledQueryRulesLog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorScheduledQueryRulesLogCriteriaDimensionList <a name="MonitorScheduledQueryRulesLogCriteriaDimensionList" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_scheduled_query_rules_log

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorScheduledQueryRulesLogCriteriaDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>]]

---


### MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference <a name="MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_scheduled_query_rules_log

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorScheduledQueryRulesLogCriteriaDimension]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>]

---


### MonitorScheduledQueryRulesLogCriteriaOutputReference <a name="MonitorScheduledQueryRulesLogCriteriaOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_scheduled_query_rules_log

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.putDimension">put_dimension</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.putDimension"></a>

```python
def put_dimension(
  value: typing.Union[IResolvable, typing.List[MonitorScheduledQueryRulesLogCriteriaDimension]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.putDimension.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList">MonitorScheduledQueryRulesLogCriteriaDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.dimensionInput">dimension_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.dimension"></a>

```python
dimension: MonitorScheduledQueryRulesLogCriteriaDimensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList">MonitorScheduledQueryRulesLogCriteriaDimensionList</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.dimensionInput"></a>

```python
dimension_input: typing.Union[IResolvable, typing.List[MonitorScheduledQueryRulesLogCriteriaDimension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>]]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: MonitorScheduledQueryRulesLogCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a>

---


### MonitorScheduledQueryRulesLogTimeoutsOutputReference <a name="MonitorScheduledQueryRulesLogTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_scheduled_query_rules_log

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorScheduledQueryRulesLogTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a>]

---



