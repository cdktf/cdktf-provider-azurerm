# `dataAzurermDatabricksWorkspacePrivateEndpointConnection` Submodule <a name="`dataAzurermDatabricksWorkspacePrivateEndpointConnection` Submodule" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDatabricksWorkspacePrivateEndpointConnection <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnection" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection azurerm_databricks_workspace_private_endpoint_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databricks_workspace_private_endpoint_connection

dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  private_endpoint_id: str,
  workspace_id: str,
  id: str = None,
  timeouts: DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#private_endpoint_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#private_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#workspace_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#id DataAzurermDatabricksWorkspacePrivateEndpointConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.privateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#private_endpoint_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#private_endpoint_id}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#workspace_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#id DataAzurermDatabricksWorkspacePrivateEndpointConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#timeouts DataAzurermDatabricksWorkspacePrivateEndpointConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#read DataAzurermDatabricksWorkspacePrivateEndpointConnection#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermDatabricksWorkspacePrivateEndpointConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databricks_workspace_private_endpoint_connection

dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databricks_workspace_private_endpoint_connection

dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databricks_workspace_private_endpoint_connection

dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databricks_workspace_private_endpoint_connection

dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermDatabricksWorkspacePrivateEndpointConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermDatabricksWorkspacePrivateEndpointConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermDatabricksWorkspacePrivateEndpointConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDatabricksWorkspacePrivateEndpointConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.privateEndpointIdInput">private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.connections"></a>

```python
connections: DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.timeouts"></a>

```python
timeouts: DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `private_endpoint_id_input`<sup>Optional</sup> <a name="private_endpoint_id_input" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.privateEndpointIdInput"></a>

```python
private_endpoint_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a>]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databricks_workspace_private_endpoint_connection

dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  private_endpoint_id: str,
  workspace_id: str,
  id: str = None,
  timeouts: DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#private_endpoint_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#private_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#workspace_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#id DataAzurermDatabricksWorkspacePrivateEndpointConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#private_endpoint_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#private_endpoint_id}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#workspace_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#id DataAzurermDatabricksWorkspacePrivateEndpointConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.timeouts"></a>

```python
timeouts: DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#timeouts DataAzurermDatabricksWorkspacePrivateEndpointConnection#timeouts}

---

### DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databricks_workspace_private_endpoint_connection

dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections()
```


### DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databricks_workspace_private_endpoint_connection

dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#read DataAzurermDatabricksWorkspacePrivateEndpointConnection#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/databricks_workspace_private_endpoint_connection#read DataAzurermDatabricksWorkspacePrivateEndpointConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databricks_workspace_private_endpoint_connection

dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databricks_workspace_private_endpoint_connection

dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.actionRequired">action_required</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.workspacePrivateEndpointId">workspace_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_required`<sup>Required</sup> <a name="action_required" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.actionRequired"></a>

```python
action_required: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `workspace_private_endpoint_id`<sup>Required</sup> <a name="workspace_private_endpoint_id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.workspacePrivateEndpointId"></a>

```python
workspace_private_endpoint_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections</a>

---


### DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_databricks_workspace_private_endpoint_connection

dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a>]

---



