# `data_azurerm_monitor_scheduled_query_rules_log`

Refer to the Terraform Registory for docs: [`data_azurerm_monitor_scheduled_query_rules_log`](https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log).

# `dataAzurermMonitorScheduledQueryRulesLog` Submodule <a name="`dataAzurermMonitorScheduledQueryRulesLog` Submodule" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMonitorScheduledQueryRulesLog <a name="DataAzurermMonitorScheduledQueryRulesLog" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log azurerm_monitor_scheduled_query_rules_log}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_scheduled_query_rules_log

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermMonitorScheduledQueryRulesLogTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#name DataAzurermMonitorScheduledQueryRulesLog#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#resource_group_name DataAzurermMonitorScheduledQueryRulesLog#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#id DataAzurermMonitorScheduledQueryRulesLog#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#name DataAzurermMonitorScheduledQueryRulesLog#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#resource_group_name DataAzurermMonitorScheduledQueryRulesLog#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#id DataAzurermMonitorScheduledQueryRulesLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#timeouts DataAzurermMonitorScheduledQueryRulesLog#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#read DataAzurermMonitorScheduledQueryRulesLog#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_scheduled_query_rules_log

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_scheduled_query_rules_log

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_scheduled_query_rules_log

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.authorizedResourceIds">authorized_resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList">DataAzurermMonitorScheduledQueryRulesLogCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference">DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `authorized_resource_ids`<sup>Required</sup> <a name="authorized_resource_ids" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.authorizedResourceIds"></a>

```python
authorized_resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.criteria"></a>

```python
criteria: DataAzurermMonitorScheduledQueryRulesLogCriteriaList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList">DataAzurermMonitorScheduledQueryRulesLogCriteriaList</a>

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.timeouts"></a>

```python
timeouts: DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference">DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermMonitorScheduledQueryRulesLogTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMonitorScheduledQueryRulesLogConfig <a name="DataAzurermMonitorScheduledQueryRulesLogConfig" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_scheduled_query_rules_log

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermMonitorScheduledQueryRulesLogTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#name DataAzurermMonitorScheduledQueryRulesLog#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#resource_group_name DataAzurermMonitorScheduledQueryRulesLog#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#id DataAzurermMonitorScheduledQueryRulesLog#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#name DataAzurermMonitorScheduledQueryRulesLog#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#resource_group_name DataAzurermMonitorScheduledQueryRulesLog#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#id DataAzurermMonitorScheduledQueryRulesLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.timeouts"></a>

```python
timeouts: DataAzurermMonitorScheduledQueryRulesLogTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#timeouts DataAzurermMonitorScheduledQueryRulesLog#timeouts}

---

### DataAzurermMonitorScheduledQueryRulesLogCriteria <a name="DataAzurermMonitorScheduledQueryRulesLogCriteria" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_scheduled_query_rules_log

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteria()
```


### DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension <a name="DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_scheduled_query_rules_log

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension()
```


### DataAzurermMonitorScheduledQueryRulesLogTimeouts <a name="DataAzurermMonitorScheduledQueryRulesLogTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_scheduled_query_rules_log

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#read DataAzurermMonitorScheduledQueryRulesLog#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/data-sources/monitor_scheduled_query_rules_log#read DataAzurermMonitorScheduledQueryRulesLog#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList <a name="DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_scheduled_query_rules_log

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference <a name="DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_scheduled_query_rules_log

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension">DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension">DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension</a>

---


### DataAzurermMonitorScheduledQueryRulesLogCriteriaList <a name="DataAzurermMonitorScheduledQueryRulesLogCriteriaList" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_scheduled_query_rules_log

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference <a name="DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_scheduled_query_rules_log

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList">DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteria">DataAzurermMonitorScheduledQueryRulesLogCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.dimension"></a>

```python
dimension: DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList">DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList</a>

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorScheduledQueryRulesLogCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteria">DataAzurermMonitorScheduledQueryRulesLogCriteria</a>

---


### DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference <a name="DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_scheduled_query_rules_log

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermMonitorScheduledQueryRulesLogTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a>]

---



