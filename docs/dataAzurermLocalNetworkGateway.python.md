# `dataAzurermLocalNetworkGateway` Submodule <a name="`dataAzurermLocalNetworkGateway` Submodule" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermLocalNetworkGateway <a name="DataAzurermLocalNetworkGateway" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway azurerm_local_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_local_network_gateway

dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermLocalNetworkGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#name DataAzurermLocalNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#resource_group_name DataAzurermLocalNetworkGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#id DataAzurermLocalNetworkGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeouts">DataAzurermLocalNetworkGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#name DataAzurermLocalNetworkGateway#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#resource_group_name DataAzurermLocalNetworkGateway#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#id DataAzurermLocalNetworkGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeouts">DataAzurermLocalNetworkGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#timeouts DataAzurermLocalNetworkGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#read DataAzurermLocalNetworkGateway#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermLocalNetworkGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_local_network_gateway

dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_local_network_gateway

dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_local_network_gateway

dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_local_network_gateway

dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermLocalNetworkGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermLocalNetworkGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermLocalNetworkGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermLocalNetworkGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.addressSpace">address_space</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.bgpSettings">bgp_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList">DataAzurermLocalNetworkGatewayBgpSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.gatewayAddress">gateway_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.gatewayFqdn">gateway_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference">DataAzurermLocalNetworkGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeouts">DataAzurermLocalNetworkGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `address_space`<sup>Required</sup> <a name="address_space" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.addressSpace"></a>

```python
address_space: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bgp_settings`<sup>Required</sup> <a name="bgp_settings" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.bgpSettings"></a>

```python
bgp_settings: DataAzurermLocalNetworkGatewayBgpSettingsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList">DataAzurermLocalNetworkGatewayBgpSettingsList</a>

---

##### `gateway_address`<sup>Required</sup> <a name="gateway_address" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.gatewayAddress"></a>

```python
gateway_address: str
```

- *Type:* str

---

##### `gateway_fqdn`<sup>Required</sup> <a name="gateway_fqdn" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.gatewayFqdn"></a>

```python
gateway_fqdn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.timeouts"></a>

```python
timeouts: DataAzurermLocalNetworkGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference">DataAzurermLocalNetworkGatewayTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermLocalNetworkGatewayTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeouts">DataAzurermLocalNetworkGatewayTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermLocalNetworkGatewayBgpSettings <a name="DataAzurermLocalNetworkGatewayBgpSettings" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_local_network_gateway

dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettings()
```


### DataAzurermLocalNetworkGatewayConfig <a name="DataAzurermLocalNetworkGatewayConfig" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_local_network_gateway

dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermLocalNetworkGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#name DataAzurermLocalNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#resource_group_name DataAzurermLocalNetworkGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#id DataAzurermLocalNetworkGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeouts">DataAzurermLocalNetworkGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#name DataAzurermLocalNetworkGateway#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#resource_group_name DataAzurermLocalNetworkGateway#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#id DataAzurermLocalNetworkGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayConfig.property.timeouts"></a>

```python
timeouts: DataAzurermLocalNetworkGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeouts">DataAzurermLocalNetworkGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#timeouts DataAzurermLocalNetworkGateway#timeouts}

---

### DataAzurermLocalNetworkGatewayTimeouts <a name="DataAzurermLocalNetworkGatewayTimeouts" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_local_network_gateway

dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#read DataAzurermLocalNetworkGateway#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/local_network_gateway#read DataAzurermLocalNetworkGateway#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermLocalNetworkGatewayBgpSettingsList <a name="DataAzurermLocalNetworkGatewayBgpSettingsList" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_local_network_gateway

dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermLocalNetworkGatewayBgpSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermLocalNetworkGatewayBgpSettingsOutputReference <a name="DataAzurermLocalNetworkGatewayBgpSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_local_network_gateway

dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.property.bgpPeeringAddress">bgp_peering_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.property.peerWeight">peer_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettings">DataAzurermLocalNetworkGatewayBgpSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_peering_address`<sup>Required</sup> <a name="bgp_peering_address" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.property.bgpPeeringAddress"></a>

```python
bgp_peering_address: str
```

- *Type:* str

---

##### `peer_weight`<sup>Required</sup> <a name="peer_weight" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.property.peerWeight"></a>

```python
peer_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermLocalNetworkGatewayBgpSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayBgpSettings">DataAzurermLocalNetworkGatewayBgpSettings</a>

---


### DataAzurermLocalNetworkGatewayTimeoutsOutputReference <a name="DataAzurermLocalNetworkGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_local_network_gateway

dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeouts">DataAzurermLocalNetworkGatewayTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermLocalNetworkGatewayTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermLocalNetworkGateway.DataAzurermLocalNetworkGatewayTimeouts">DataAzurermLocalNetworkGatewayTimeouts</a>

---



