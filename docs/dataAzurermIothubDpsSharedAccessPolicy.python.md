# `data_azurerm_iothub_dps_shared_access_policy`

Refer to the Terraform Registory for docs: [`data_azurerm_iothub_dps_shared_access_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy).

# `dataAzurermIothubDpsSharedAccessPolicy` Submodule <a name="`dataAzurermIothubDpsSharedAccessPolicy` Submodule" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermIothubDpsSharedAccessPolicy <a name="DataAzurermIothubDpsSharedAccessPolicy" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy azurerm_iothub_dps_shared_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_iothub_dps_shared_access_policy

dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  iothub_dps_name: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermIothubDpsSharedAccessPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.iothubDpsName">iothub_dps_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#iothub_dps_name DataAzurermIothubDpsSharedAccessPolicy#iothub_dps_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#name DataAzurermIothubDpsSharedAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#resource_group_name DataAzurermIothubDpsSharedAccessPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#id DataAzurermIothubDpsSharedAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iothub_dps_name`<sup>Required</sup> <a name="iothub_dps_name" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.iothubDpsName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#iothub_dps_name DataAzurermIothubDpsSharedAccessPolicy#iothub_dps_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#name DataAzurermIothubDpsSharedAccessPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#resource_group_name DataAzurermIothubDpsSharedAccessPolicy#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#id DataAzurermIothubDpsSharedAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#timeouts DataAzurermIothubDpsSharedAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#read DataAzurermIothubDpsSharedAccessPolicy#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_iothub_dps_shared_access_policy

dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_iothub_dps_shared_access_policy

dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_iothub_dps_shared_access_policy

dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.primaryConnectionString">primary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.secondaryConnectionString">secondary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.secondaryKey">secondary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference">DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.iothubDpsNameInput">iothub_dps_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.iothubDpsName">iothub_dps_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `primary_connection_string`<sup>Required</sup> <a name="primary_connection_string" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.primaryConnectionString"></a>

```python
primary_connection_string: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `secondary_connection_string`<sup>Required</sup> <a name="secondary_connection_string" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.secondaryConnectionString"></a>

```python
secondary_connection_string: str
```

- *Type:* str

---

##### `secondary_key`<sup>Required</sup> <a name="secondary_key" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.secondaryKey"></a>

```python
secondary_key: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.timeouts"></a>

```python
timeouts: DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference">DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iothub_dps_name_input`<sup>Optional</sup> <a name="iothub_dps_name_input" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.iothubDpsNameInput"></a>

```python
iothub_dps_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermIothubDpsSharedAccessPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iothub_dps_name`<sup>Required</sup> <a name="iothub_dps_name" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.iothubDpsName"></a>

```python
iothub_dps_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermIothubDpsSharedAccessPolicyConfig <a name="DataAzurermIothubDpsSharedAccessPolicyConfig" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_iothub_dps_shared_access_policy

dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  iothub_dps_name: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermIothubDpsSharedAccessPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.iothubDpsName">iothub_dps_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#iothub_dps_name DataAzurermIothubDpsSharedAccessPolicy#iothub_dps_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#name DataAzurermIothubDpsSharedAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#resource_group_name DataAzurermIothubDpsSharedAccessPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#id DataAzurermIothubDpsSharedAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iothub_dps_name`<sup>Required</sup> <a name="iothub_dps_name" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.iothubDpsName"></a>

```python
iothub_dps_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#iothub_dps_name DataAzurermIothubDpsSharedAccessPolicy#iothub_dps_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#name DataAzurermIothubDpsSharedAccessPolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#resource_group_name DataAzurermIothubDpsSharedAccessPolicy#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#id DataAzurermIothubDpsSharedAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.timeouts"></a>

```python
timeouts: DataAzurermIothubDpsSharedAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#timeouts DataAzurermIothubDpsSharedAccessPolicy#timeouts}

---

### DataAzurermIothubDpsSharedAccessPolicyTimeouts <a name="DataAzurermIothubDpsSharedAccessPolicyTimeouts" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_iothub_dps_shared_access_policy

dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#read DataAzurermIothubDpsSharedAccessPolicy#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/iothub_dps_shared_access_policy#read DataAzurermIothubDpsSharedAccessPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference <a name="DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_iothub_dps_shared_access_policy

dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermIothubDpsSharedAccessPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a>]

---



