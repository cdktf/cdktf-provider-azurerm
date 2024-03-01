# `dataAzurermMonitorDataCollectionRule` Submodule <a name="`dataAzurermMonitorDataCollectionRule` Submodule" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMonitorDataCollectionRule <a name="DataAzurermMonitorDataCollectionRule" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule azurerm_monitor_data_collection_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule(
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
  timeouts: DataAzurermMonitorDataCollectionRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#name DataAzurermMonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#resource_group_name DataAzurermMonitorDataCollectionRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#id DataAzurermMonitorDataCollectionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#name DataAzurermMonitorDataCollectionRule#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#resource_group_name DataAzurermMonitorDataCollectionRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#id DataAzurermMonitorDataCollectionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#timeouts DataAzurermMonitorDataCollectionRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#read DataAzurermMonitorDataCollectionRule#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermMonitorDataCollectionRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermMonitorDataCollectionRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermMonitorDataCollectionRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermMonitorDataCollectionRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMonitorDataCollectionRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataCollectionEndpointId">data_collection_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataFlow">data_flow</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList">DataAzurermMonitorDataCollectionRuleDataFlowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataSources">data_sources</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList">DataAzurermMonitorDataCollectionRuleDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList">DataAzurermMonitorDataCollectionRuleDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList">DataAzurermMonitorDataCollectionRuleIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.immutableId">immutable_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.streamDeclaration">stream_declaration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList">DataAzurermMonitorDataCollectionRuleStreamDeclarationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference">DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `data_collection_endpoint_id`<sup>Required</sup> <a name="data_collection_endpoint_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataCollectionEndpointId"></a>

```python
data_collection_endpoint_id: str
```

- *Type:* str

---

##### `data_flow`<sup>Required</sup> <a name="data_flow" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataFlow"></a>

```python
data_flow: DataAzurermMonitorDataCollectionRuleDataFlowList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList">DataAzurermMonitorDataCollectionRuleDataFlowList</a>

---

##### `data_sources`<sup>Required</sup> <a name="data_sources" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataSources"></a>

```python
data_sources: DataAzurermMonitorDataCollectionRuleDataSourcesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList">DataAzurermMonitorDataCollectionRuleDataSourcesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.destinations"></a>

```python
destinations: DataAzurermMonitorDataCollectionRuleDestinationsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList">DataAzurermMonitorDataCollectionRuleDestinationsList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.identity"></a>

```python
identity: DataAzurermMonitorDataCollectionRuleIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList">DataAzurermMonitorDataCollectionRuleIdentityList</a>

---

##### `immutable_id`<sup>Required</sup> <a name="immutable_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.immutableId"></a>

```python
immutable_id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `stream_declaration`<sup>Required</sup> <a name="stream_declaration" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.streamDeclaration"></a>

```python
stream_declaration: DataAzurermMonitorDataCollectionRuleStreamDeclarationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList">DataAzurermMonitorDataCollectionRuleStreamDeclarationList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.timeouts"></a>

```python
timeouts: DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference">DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermMonitorDataCollectionRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMonitorDataCollectionRuleConfig <a name="DataAzurermMonitorDataCollectionRuleConfig" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig(
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
  timeouts: DataAzurermMonitorDataCollectionRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#name DataAzurermMonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#resource_group_name DataAzurermMonitorDataCollectionRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#id DataAzurermMonitorDataCollectionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#name DataAzurermMonitorDataCollectionRule#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#resource_group_name DataAzurermMonitorDataCollectionRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#id DataAzurermMonitorDataCollectionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.timeouts"></a>

```python
timeouts: DataAzurermMonitorDataCollectionRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#timeouts DataAzurermMonitorDataCollectionRule#timeouts}

---

### DataAzurermMonitorDataCollectionRuleDataFlow <a name="DataAzurermMonitorDataCollectionRuleDataFlow" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlow.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlow()
```


### DataAzurermMonitorDataCollectionRuleDataSources <a name="DataAzurermMonitorDataCollectionRuleDataSources" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSources.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSources()
```


### DataAzurermMonitorDataCollectionRuleDataSourcesDataImport <a name="DataAzurermMonitorDataCollectionRuleDataSourcesDataImport" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImport.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImport()
```


### DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource <a name="DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource()
```


### DataAzurermMonitorDataCollectionRuleDataSourcesExtension <a name="DataAzurermMonitorDataCollectionRuleDataSourcesExtension" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtension()
```


### DataAzurermMonitorDataCollectionRuleDataSourcesIisLog <a name="DataAzurermMonitorDataCollectionRuleDataSourcesIisLog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLog.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLog()
```


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFile <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFile" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFile()
```


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings()
```


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText()
```


### DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter()
```


### DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry()
```


### DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder()
```


### DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter()
```


### DataAzurermMonitorDataCollectionRuleDataSourcesSyslog <a name="DataAzurermMonitorDataCollectionRuleDataSourcesSyslog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslog.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslog()
```


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog()
```


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog()
```


### DataAzurermMonitorDataCollectionRuleDestinations <a name="DataAzurermMonitorDataCollectionRuleDestinations" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinations()
```


### DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics <a name="DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics()
```


### DataAzurermMonitorDataCollectionRuleDestinationsEventHub <a name="DataAzurermMonitorDataCollectionRuleDestinationsEventHub" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHub.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHub()
```


### DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect <a name="DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect()
```


### DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics <a name="DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics()
```


### DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount <a name="DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount()
```


### DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob()
```


### DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect()
```


### DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect()
```


### DataAzurermMonitorDataCollectionRuleIdentity <a name="DataAzurermMonitorDataCollectionRuleIdentity" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentity()
```


### DataAzurermMonitorDataCollectionRuleStreamDeclaration <a name="DataAzurermMonitorDataCollectionRuleStreamDeclaration" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclaration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclaration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclaration()
```


### DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn <a name="DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn()
```


### DataAzurermMonitorDataCollectionRuleTimeouts <a name="DataAzurermMonitorDataCollectionRuleTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#read DataAzurermMonitorDataCollectionRule#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/monitor_data_collection_rule#read DataAzurermMonitorDataCollectionRule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMonitorDataCollectionRuleDataFlowList <a name="DataAzurermMonitorDataCollectionRuleDataFlowList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataFlowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataFlowOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataFlowOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.builtInTransform">built_in_transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.outputStream">output_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.streams">streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.transformKql">transform_kql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlow">DataAzurermMonitorDataCollectionRuleDataFlow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `built_in_transform`<sup>Required</sup> <a name="built_in_transform" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.builtInTransform"></a>

```python
built_in_transform: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_stream`<sup>Required</sup> <a name="output_stream" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.outputStream"></a>

```python
output_stream: str
```

- *Type:* str

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.streams"></a>

```python
streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `transform_kql`<sup>Required</sup> <a name="transform_kql" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.transformKql"></a>

```python
transform_kql: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataFlow
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlow">DataAzurermMonitorDataCollectionRuleDataFlow</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.consumerGroup">consumer_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.stream">stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_group`<sup>Required</sup> <a name="consumer_group" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.consumerGroup"></a>

```python
consumer_group: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.stream"></a>

```python
stream: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.eventHubDataSource">event_hub_data_source</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList">DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImport">DataAzurermMonitorDataCollectionRuleDataSourcesDataImport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_hub_data_source`<sup>Required</sup> <a name="event_hub_data_source" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.eventHubDataSource"></a>

```python
event_hub_data_source: DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList">DataAzurermMonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSourcesDataImport
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImport">DataAzurermMonitorDataCollectionRuleDataSourcesDataImport</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionJson">extension_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionName">extension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.inputDataSources">input_data_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.streams">streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtension">DataAzurermMonitorDataCollectionRuleDataSourcesExtension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extension_json`<sup>Required</sup> <a name="extension_json" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionJson"></a>

```python
extension_json: str
```

- *Type:* str

---

##### `extension_name`<sup>Required</sup> <a name="extension_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionName"></a>

```python
extension_name: str
```

- *Type:* str

---

##### `input_data_sources`<sup>Required</sup> <a name="input_data_sources" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.inputDataSources"></a>

```python
input_data_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.streams"></a>

```python
streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSourcesExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtension">DataAzurermMonitorDataCollectionRuleDataSourcesExtension</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.logDirectories">log_directories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.streams">streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLog">DataAzurermMonitorDataCollectionRuleDataSourcesIisLog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_directories`<sup>Required</sup> <a name="log_directories" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.logDirectories"></a>

```python
log_directories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.streams"></a>

```python
streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSourcesIisLog
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLog">DataAzurermMonitorDataCollectionRuleDataSourcesIisLog</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.filePatterns">file_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.streams">streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFile">DataAzurermMonitorDataCollectionRuleDataSourcesLogFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_patterns`<sup>Required</sup> <a name="file_patterns" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.filePatterns"></a>

```python
file_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.settings"></a>

```python
settings: DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList</a>

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.streams"></a>

```python
streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSourcesLogFile
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFile">DataAzurermMonitorDataCollectionRuleDataSourcesLogFile</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.text"></a>

```python
text: DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettings</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.recordStartTimestampFormat">record_start_timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `record_start_timestamp_format`<sup>Required</sup> <a name="record_start_timestamp_format" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.recordStartTimestampFormat"></a>

```python
record_start_timestamp_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileSettingsText</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.dataImport">data_import</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList">DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList">DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.iisLog">iis_log</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList">DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.logFile">log_file</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.performanceCounter">performance_counter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList">DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.platformTelemetry">platform_telemetry</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList">DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.prometheusForwarder">prometheus_forwarder</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.syslog">syslog</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList">DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.windowsEventLog">windows_event_log</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.windowsFirewallLog">windows_firewall_log</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSources">DataAzurermMonitorDataCollectionRuleDataSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_import`<sup>Required</sup> <a name="data_import" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.dataImport"></a>

```python
data_import: DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList">DataAzurermMonitorDataCollectionRuleDataSourcesDataImportList</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.extension"></a>

```python
extension: DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList">DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList</a>

---

##### `iis_log`<sup>Required</sup> <a name="iis_log" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.iisLog"></a>

```python
iis_log: DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList">DataAzurermMonitorDataCollectionRuleDataSourcesIisLogList</a>

---

##### `log_file`<sup>Required</sup> <a name="log_file" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.logFile"></a>

```python
log_file: DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList">DataAzurermMonitorDataCollectionRuleDataSourcesLogFileList</a>

---

##### `performance_counter`<sup>Required</sup> <a name="performance_counter" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.performanceCounter"></a>

```python
performance_counter: DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList">DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList</a>

---

##### `platform_telemetry`<sup>Required</sup> <a name="platform_telemetry" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.platformTelemetry"></a>

```python
platform_telemetry: DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList">DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList</a>

---

##### `prometheus_forwarder`<sup>Required</sup> <a name="prometheus_forwarder" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.prometheusForwarder"></a>

```python
prometheus_forwarder: DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList</a>

---

##### `syslog`<sup>Required</sup> <a name="syslog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.syslog"></a>

```python
syslog: DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList">DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList</a>

---

##### `windows_event_log`<sup>Required</sup> <a name="windows_event_log" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.windowsEventLog"></a>

```python
windows_event_log: DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList</a>

---

##### `windows_firewall_log`<sup>Required</sup> <a name="windows_firewall_log" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.windowsFirewallLog"></a>

```python
windows_firewall_log: DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSources
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSources">DataAzurermMonitorDataCollectionRuleDataSources</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.counterSpecifiers">counter_specifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.samplingFrequencyInSeconds">sampling_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.streams">streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter">DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `counter_specifiers`<sup>Required</sup> <a name="counter_specifiers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.counterSpecifiers"></a>

```python
counter_specifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sampling_frequency_in_seconds`<sup>Required</sup> <a name="sampling_frequency_in_seconds" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.samplingFrequencyInSeconds"></a>

```python
sampling_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.streams"></a>

```python
streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter">DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.streams">streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry">DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.streams"></a>

```python
streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry">DataAzurermMonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.labelIncludeFilter">label_include_filter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.streams">streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_include_filter`<sup>Required</sup> <a name="label_include_filter" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.labelIncludeFilter"></a>

```python
label_include_filter: DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.streams"></a>

```python
streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder">DataAzurermMonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.facilityNames">facility_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.logLevels">log_levels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.streams">streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslog">DataAzurermMonitorDataCollectionRuleDataSourcesSyslog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `facility_names`<sup>Required</sup> <a name="facility_names" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.facilityNames"></a>

```python
facility_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_levels`<sup>Required</sup> <a name="log_levels" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.logLevels"></a>

```python
log_levels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.streams"></a>

```python
streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSourcesSyslog
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslog">DataAzurermMonitorDataCollectionRuleDataSourcesSyslog</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.streams">streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.xPathQueries">x_path_queries</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.streams"></a>

```python
streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_path_queries`<sup>Required</sup> <a name="x_path_queries" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.xPathQueries"></a>

```python
x_path_queries: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.streams">streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.streams"></a>

```python
streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList <a name="DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics">DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics">DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList <a name="DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.eventHubId">event_hub_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect">DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_hub_id`<sup>Required</sup> <a name="event_hub_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.eventHubId"></a>

```python
event_hub_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect">DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirect</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsEventHubList <a name="DataAzurermMonitorDataCollectionRuleDestinationsEventHubList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.eventHubId">event_hub_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHub">DataAzurermMonitorDataCollectionRuleDestinationsEventHub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_hub_id`<sup>Required</sup> <a name="event_hub_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.eventHubId"></a>

```python
event_hub_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDestinationsEventHub
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHub">DataAzurermMonitorDataCollectionRuleDestinationsEventHub</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsList <a name="DataAzurermMonitorDataCollectionRuleDestinationsList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList <a name="DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.workspaceResourceId">workspace_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics">DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `workspace_resource_id`<sup>Required</sup> <a name="workspace_resource_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.workspaceResourceId"></a>

```python
workspace_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics">DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList <a name="DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.monitorAccountId">monitor_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount">DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `monitor_account_id`<sup>Required</sup> <a name="monitor_account_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.monitorAccountId"></a>

```python
monitor_account_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount">DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccount</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.azureMonitorMetrics">azure_monitor_metrics</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList">DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.eventHub">event_hub</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList">DataAzurermMonitorDataCollectionRuleDestinationsEventHubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.eventHubDirect">event_hub_direct</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList">DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.logAnalytics">log_analytics</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList">DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.monitorAccount">monitor_account</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList">DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.storageBlob">storage_blob</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobDirect">storage_blob_direct</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.storageTableDirect">storage_table_direct</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList">DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinations">DataAzurermMonitorDataCollectionRuleDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_monitor_metrics`<sup>Required</sup> <a name="azure_monitor_metrics" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.azureMonitorMetrics"></a>

```python
azure_monitor_metrics: DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList">DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList</a>

---

##### `event_hub`<sup>Required</sup> <a name="event_hub" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.eventHub"></a>

```python
event_hub: DataAzurermMonitorDataCollectionRuleDestinationsEventHubList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubList">DataAzurermMonitorDataCollectionRuleDestinationsEventHubList</a>

---

##### `event_hub_direct`<sup>Required</sup> <a name="event_hub_direct" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.eventHubDirect"></a>

```python
event_hub_direct: DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList">DataAzurermMonitorDataCollectionRuleDestinationsEventHubDirectList</a>

---

##### `log_analytics`<sup>Required</sup> <a name="log_analytics" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.logAnalytics"></a>

```python
log_analytics: DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList">DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList</a>

---

##### `monitor_account`<sup>Required</sup> <a name="monitor_account" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.monitorAccount"></a>

```python
monitor_account: DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList">DataAzurermMonitorDataCollectionRuleDestinationsMonitorAccountList</a>

---

##### `storage_blob`<sup>Required</sup> <a name="storage_blob" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.storageBlob"></a>

```python
storage_blob: DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList</a>

---

##### `storage_blob_direct`<sup>Required</sup> <a name="storage_blob_direct" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobDirect"></a>

```python
storage_blob_direct: DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList</a>

---

##### `storage_table_direct`<sup>Required</sup> <a name="storage_table_direct" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.storageTableDirect"></a>

```python
storage_table_direct: DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList">DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDestinations
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinations">DataAzurermMonitorDataCollectionRuleDestinations</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobDirect</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob">DataAzurermMonitorDataCollectionRuleDestinationsStorageBlob</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect">DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect">DataAzurermMonitorDataCollectionRuleDestinationsStorageTableDirect</a>

---


### DataAzurermMonitorDataCollectionRuleIdentityList <a name="DataAzurermMonitorDataCollectionRuleIdentityList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleIdentityOutputReference <a name="DataAzurermMonitorDataCollectionRuleIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentity">DataAzurermMonitorDataCollectionRuleIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleIdentity">DataAzurermMonitorDataCollectionRuleIdentity</a>

---


### DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList <a name="DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference <a name="DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn">DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn">DataAzurermMonitorDataCollectionRuleStreamDeclarationColumn</a>

---


### DataAzurermMonitorDataCollectionRuleStreamDeclarationList <a name="DataAzurermMonitorDataCollectionRuleStreamDeclarationList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference <a name="DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList">DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclaration">DataAzurermMonitorDataCollectionRuleStreamDeclaration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.column"></a>

```python
column: DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList">DataAzurermMonitorDataCollectionRuleStreamDeclarationColumnList</a>

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclarationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMonitorDataCollectionRuleStreamDeclaration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleStreamDeclaration">DataAzurermMonitorDataCollectionRuleStreamDeclaration</a>

---


### DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference <a name="DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_monitor_data_collection_rule

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermMonitorDataCollectionRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a>]

---



