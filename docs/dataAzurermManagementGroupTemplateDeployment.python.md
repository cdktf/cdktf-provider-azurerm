# `data_azurerm_management_group_template_deployment`

Refer to the Terraform Registory for docs: [`data_azurerm_management_group_template_deployment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment).

# `dataAzurermManagementGroupTemplateDeployment` Submodule <a name="`dataAzurermManagementGroupTemplateDeployment` Submodule" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermManagementGroupTemplateDeployment <a name="DataAzurermManagementGroupTemplateDeployment" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment azurerm_management_group_template_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_management_group_template_deployment

dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  management_group_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermManagementGroupTemplateDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.managementGroupId">management_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#management_group_id DataAzurermManagementGroupTemplateDeployment#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#name DataAzurermManagementGroupTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#id DataAzurermManagementGroupTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `management_group_id`<sup>Required</sup> <a name="management_group_id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.managementGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#management_group_id DataAzurermManagementGroupTemplateDeployment#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#name DataAzurermManagementGroupTemplateDeployment#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#id DataAzurermManagementGroupTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#timeouts DataAzurermManagementGroupTemplateDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#read DataAzurermManagementGroupTemplateDeployment#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_management_group_template_deployment

dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_management_group_template_deployment

dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_management_group_template_deployment

dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.outputContent">output_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference">DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.managementGroupIdInput">management_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.managementGroupId">management_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `output_content`<sup>Required</sup> <a name="output_content" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.outputContent"></a>

```python
output_content: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.timeouts"></a>

```python
timeouts: DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference">DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `management_group_id_input`<sup>Optional</sup> <a name="management_group_id_input" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.managementGroupIdInput"></a>

```python
management_group_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurermManagementGroupTemplateDeploymentTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `management_group_id`<sup>Required</sup> <a name="management_group_id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.managementGroupId"></a>

```python
management_group_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermManagementGroupTemplateDeploymentConfig <a name="DataAzurermManagementGroupTemplateDeploymentConfig" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_management_group_template_deployment

dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  management_group_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermManagementGroupTemplateDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.managementGroupId">management_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#management_group_id DataAzurermManagementGroupTemplateDeployment#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#name DataAzurermManagementGroupTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#id DataAzurermManagementGroupTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `management_group_id`<sup>Required</sup> <a name="management_group_id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.managementGroupId"></a>

```python
management_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#management_group_id DataAzurermManagementGroupTemplateDeployment#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#name DataAzurermManagementGroupTemplateDeployment#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#id DataAzurermManagementGroupTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.timeouts"></a>

```python
timeouts: DataAzurermManagementGroupTemplateDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#timeouts DataAzurermManagementGroupTemplateDeployment#timeouts}

---

### DataAzurermManagementGroupTemplateDeploymentTimeouts <a name="DataAzurermManagementGroupTemplateDeploymentTimeouts" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_management_group_template_deployment

dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#read DataAzurermManagementGroupTemplateDeployment#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/management_group_template_deployment#read DataAzurermManagementGroupTemplateDeployment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference <a name="DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_management_group_template_deployment

dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurermManagementGroupTemplateDeploymentTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>, cdktf.IResolvable]

---



