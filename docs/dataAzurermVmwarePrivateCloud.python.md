# `dataAzurermVmwarePrivateCloud` Submodule <a name="`dataAzurermVmwarePrivateCloud` Submodule" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVmwarePrivateCloud <a name="DataAzurermVmwarePrivateCloud" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud azurerm_vmware_private_cloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vmware_private_cloud

dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud(
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
  timeouts: DataAzurermVmwarePrivateCloudTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#name DataAzurermVmwarePrivateCloud#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#resource_group_name DataAzurermVmwarePrivateCloud#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#id DataAzurermVmwarePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#name DataAzurermVmwarePrivateCloud#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#resource_group_name DataAzurermVmwarePrivateCloud#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#id DataAzurermVmwarePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#timeouts DataAzurermVmwarePrivateCloud#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#read DataAzurermVmwarePrivateCloud#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermVmwarePrivateCloud resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vmware_private_cloud

dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vmware_private_cloud

dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vmware_private_cloud

dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vmware_private_cloud

dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermVmwarePrivateCloud resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermVmwarePrivateCloud to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermVmwarePrivateCloud that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermVmwarePrivateCloud to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.circuit">circuit</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList">DataAzurermVmwarePrivateCloudCircuitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.hcxCloudManagerEndpoint">hcx_cloud_manager_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.internetConnectionEnabled">internet_connection_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.managementCluster">management_cluster</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList">DataAzurermVmwarePrivateCloudManagementClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.managementSubnetCidr">management_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.networkSubnetCidr">network_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.nsxtCertificateThumbprint">nsxt_certificate_thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.nsxtManagerEndpoint">nsxt_manager_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.provisioningSubnetCidr">provisioning_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference">DataAzurermVmwarePrivateCloudTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.vcenterCertificateThumbprint">vcenter_certificate_thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.vcsaEndpoint">vcsa_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.vmotionSubnetCidr">vmotion_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `circuit`<sup>Required</sup> <a name="circuit" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.circuit"></a>

```python
circuit: DataAzurermVmwarePrivateCloudCircuitList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList">DataAzurermVmwarePrivateCloudCircuitList</a>

---

##### `hcx_cloud_manager_endpoint`<sup>Required</sup> <a name="hcx_cloud_manager_endpoint" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.hcxCloudManagerEndpoint"></a>

```python
hcx_cloud_manager_endpoint: str
```

- *Type:* str

---

##### `internet_connection_enabled`<sup>Required</sup> <a name="internet_connection_enabled" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.internetConnectionEnabled"></a>

```python
internet_connection_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `management_cluster`<sup>Required</sup> <a name="management_cluster" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.managementCluster"></a>

```python
management_cluster: DataAzurermVmwarePrivateCloudManagementClusterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList">DataAzurermVmwarePrivateCloudManagementClusterList</a>

---

##### `management_subnet_cidr`<sup>Required</sup> <a name="management_subnet_cidr" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.managementSubnetCidr"></a>

```python
management_subnet_cidr: str
```

- *Type:* str

---

##### `network_subnet_cidr`<sup>Required</sup> <a name="network_subnet_cidr" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.networkSubnetCidr"></a>

```python
network_subnet_cidr: str
```

- *Type:* str

---

##### `nsxt_certificate_thumbprint`<sup>Required</sup> <a name="nsxt_certificate_thumbprint" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.nsxtCertificateThumbprint"></a>

```python
nsxt_certificate_thumbprint: str
```

- *Type:* str

---

##### `nsxt_manager_endpoint`<sup>Required</sup> <a name="nsxt_manager_endpoint" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.nsxtManagerEndpoint"></a>

```python
nsxt_manager_endpoint: str
```

- *Type:* str

---

##### `provisioning_subnet_cidr`<sup>Required</sup> <a name="provisioning_subnet_cidr" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.provisioningSubnetCidr"></a>

```python
provisioning_subnet_cidr: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.timeouts"></a>

```python
timeouts: DataAzurermVmwarePrivateCloudTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference">DataAzurermVmwarePrivateCloudTimeoutsOutputReference</a>

---

##### `vcenter_certificate_thumbprint`<sup>Required</sup> <a name="vcenter_certificate_thumbprint" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.vcenterCertificateThumbprint"></a>

```python
vcenter_certificate_thumbprint: str
```

- *Type:* str

---

##### `vcsa_endpoint`<sup>Required</sup> <a name="vcsa_endpoint" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.vcsaEndpoint"></a>

```python
vcsa_endpoint: str
```

- *Type:* str

---

##### `vmotion_subnet_cidr`<sup>Required</sup> <a name="vmotion_subnet_cidr" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.vmotionSubnetCidr"></a>

```python
vmotion_subnet_cidr: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermVmwarePrivateCloudTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVmwarePrivateCloudCircuit <a name="DataAzurermVmwarePrivateCloudCircuit" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuit.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vmware_private_cloud

dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuit()
```


### DataAzurermVmwarePrivateCloudConfig <a name="DataAzurermVmwarePrivateCloudConfig" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vmware_private_cloud

dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig(
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
  timeouts: DataAzurermVmwarePrivateCloudTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#name DataAzurermVmwarePrivateCloud#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#resource_group_name DataAzurermVmwarePrivateCloud#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#id DataAzurermVmwarePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#name DataAzurermVmwarePrivateCloud#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#resource_group_name DataAzurermVmwarePrivateCloud#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#id DataAzurermVmwarePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.timeouts"></a>

```python
timeouts: DataAzurermVmwarePrivateCloudTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#timeouts DataAzurermVmwarePrivateCloud#timeouts}

---

### DataAzurermVmwarePrivateCloudManagementCluster <a name="DataAzurermVmwarePrivateCloudManagementCluster" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vmware_private_cloud

dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementCluster()
```


### DataAzurermVmwarePrivateCloudTimeouts <a name="DataAzurermVmwarePrivateCloudTimeouts" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vmware_private_cloud

dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#read DataAzurermVmwarePrivateCloud#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vmware_private_cloud#read DataAzurermVmwarePrivateCloud#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVmwarePrivateCloudCircuitList <a name="DataAzurermVmwarePrivateCloudCircuitList" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vmware_private_cloud

dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermVmwarePrivateCloudCircuitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermVmwarePrivateCloudCircuitOutputReference <a name="DataAzurermVmwarePrivateCloudCircuitOutputReference" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vmware_private_cloud

dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.expressRouteId">express_route_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.expressRoutePrivatePeeringId">express_route_private_peering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.primarySubnetCidr">primary_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.secondarySubnetCidr">secondary_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuit">DataAzurermVmwarePrivateCloudCircuit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `express_route_id`<sup>Required</sup> <a name="express_route_id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.expressRouteId"></a>

```python
express_route_id: str
```

- *Type:* str

---

##### `express_route_private_peering_id`<sup>Required</sup> <a name="express_route_private_peering_id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.expressRoutePrivatePeeringId"></a>

```python
express_route_private_peering_id: str
```

- *Type:* str

---

##### `primary_subnet_cidr`<sup>Required</sup> <a name="primary_subnet_cidr" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.primarySubnetCidr"></a>

```python
primary_subnet_cidr: str
```

- *Type:* str

---

##### `secondary_subnet_cidr`<sup>Required</sup> <a name="secondary_subnet_cidr" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.secondarySubnetCidr"></a>

```python
secondary_subnet_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermVmwarePrivateCloudCircuit
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuit">DataAzurermVmwarePrivateCloudCircuit</a>

---


### DataAzurermVmwarePrivateCloudManagementClusterList <a name="DataAzurermVmwarePrivateCloudManagementClusterList" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vmware_private_cloud

dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermVmwarePrivateCloudManagementClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermVmwarePrivateCloudManagementClusterOutputReference <a name="DataAzurermVmwarePrivateCloudManagementClusterOutputReference" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vmware_private_cloud

dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementCluster">DataAzurermVmwarePrivateCloudManagementCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermVmwarePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementCluster">DataAzurermVmwarePrivateCloudManagementCluster</a>

---


### DataAzurermVmwarePrivateCloudTimeoutsOutputReference <a name="DataAzurermVmwarePrivateCloudTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vmware_private_cloud

dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermVmwarePrivateCloudTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a>]

---



