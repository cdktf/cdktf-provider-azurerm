# `dataAzurermLogAnalyticsWorkspaceTable` Submodule <a name="`dataAzurermLogAnalyticsWorkspaceTable` Submodule" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermLogAnalyticsWorkspaceTable <a name="DataAzurermLogAnalyticsWorkspaceTable" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table azurerm_log_analytics_workspace_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_log_analytics_workspace_table

dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable(
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
  workspace_id: str,
  id: str = None,
  timeouts: DataAzurermLogAnalyticsWorkspaceTableTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#name DataAzurermLogAnalyticsWorkspaceTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#workspace_id DataAzurermLogAnalyticsWorkspaceTable#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#id DataAzurermLogAnalyticsWorkspaceTable#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#name DataAzurermLogAnalyticsWorkspaceTable#name}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#workspace_id DataAzurermLogAnalyticsWorkspaceTable#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#id DataAzurermLogAnalyticsWorkspaceTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#timeouts DataAzurermLogAnalyticsWorkspaceTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#read DataAzurermLogAnalyticsWorkspaceTable#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermLogAnalyticsWorkspaceTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_log_analytics_workspace_table

dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_log_analytics_workspace_table

dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_log_analytics_workspace_table

dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_log_analytics_workspace_table

dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermLogAnalyticsWorkspaceTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermLogAnalyticsWorkspaceTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermLogAnalyticsWorkspaceTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermLogAnalyticsWorkspaceTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.plan">plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference">DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.totalRetentionInDays">total_retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.plan"></a>

```python
plan: str
```

- *Type:* str

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.timeouts"></a>

```python
timeouts: DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference">DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference</a>

---

##### `total_retention_in_days`<sup>Required</sup> <a name="total_retention_in_days" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.totalRetentionInDays"></a>

```python
total_retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermLogAnalyticsWorkspaceTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a>]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermLogAnalyticsWorkspaceTableConfig <a name="DataAzurermLogAnalyticsWorkspaceTableConfig" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_log_analytics_workspace_table

dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  workspace_id: str,
  id: str = None,
  timeouts: DataAzurermLogAnalyticsWorkspaceTableTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#name DataAzurermLogAnalyticsWorkspaceTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#workspace_id DataAzurermLogAnalyticsWorkspaceTable#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#id DataAzurermLogAnalyticsWorkspaceTable#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#name DataAzurermLogAnalyticsWorkspaceTable#name}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#workspace_id DataAzurermLogAnalyticsWorkspaceTable#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#id DataAzurermLogAnalyticsWorkspaceTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.timeouts"></a>

```python
timeouts: DataAzurermLogAnalyticsWorkspaceTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#timeouts DataAzurermLogAnalyticsWorkspaceTable#timeouts}

---

### DataAzurermLogAnalyticsWorkspaceTableTimeouts <a name="DataAzurermLogAnalyticsWorkspaceTableTimeouts" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_log_analytics_workspace_table

dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#read DataAzurermLogAnalyticsWorkspaceTable#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/log_analytics_workspace_table#read DataAzurermLogAnalyticsWorkspaceTable#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference <a name="DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_log_analytics_workspace_table

dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermLogAnalyticsWorkspaceTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a>]

---



