# `dataAzurermDevCenterDevBoxDefinition` Submodule <a name="`dataAzurermDevCenterDevBoxDefinition` Submodule" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDevCenterDevBoxDefinition <a name="DataAzurermDevCenterDevBoxDefinition" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition azurerm_dev_center_dev_box_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_dev_box_definition

dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dev_center_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermDevCenterDevBoxDefinitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.devCenterId">dev_center_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#dev_center_id DataAzurermDevCenterDevBoxDefinition#dev_center_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#name DataAzurermDevCenterDevBoxDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#id DataAzurermDevCenterDevBoxDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeouts">DataAzurermDevCenterDevBoxDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dev_center_id`<sup>Required</sup> <a name="dev_center_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.devCenterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#dev_center_id DataAzurermDevCenterDevBoxDefinition#dev_center_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#name DataAzurermDevCenterDevBoxDefinition#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#id DataAzurermDevCenterDevBoxDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeouts">DataAzurermDevCenterDevBoxDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#timeouts DataAzurermDevCenterDevBoxDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#read DataAzurermDevCenterDevBoxDefinition#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermDevCenterDevBoxDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_dev_box_definition

dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_dev_box_definition

dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_dev_box_definition

dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_dev_box_definition

dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermDevCenterDevBoxDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermDevCenterDevBoxDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermDevCenterDevBoxDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDevCenterDevBoxDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.hibernateSupportEnabled">hibernate_support_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.imageReferenceId">image_reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference">DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.devCenterIdInput">dev_center_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeouts">DataAzurermDevCenterDevBoxDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.devCenterId">dev_center_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `hibernate_support_enabled`<sup>Required</sup> <a name="hibernate_support_enabled" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.hibernateSupportEnabled"></a>

```python
hibernate_support_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `image_reference_id`<sup>Required</sup> <a name="image_reference_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.imageReferenceId"></a>

```python
image_reference_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.timeouts"></a>

```python
timeouts: DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference">DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference</a>

---

##### `dev_center_id_input`<sup>Optional</sup> <a name="dev_center_id_input" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.devCenterIdInput"></a>

```python
dev_center_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermDevCenterDevBoxDefinitionTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeouts">DataAzurermDevCenterDevBoxDefinitionTimeouts</a>

---

##### `dev_center_id`<sup>Required</sup> <a name="dev_center_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.devCenterId"></a>

```python
dev_center_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDevCenterDevBoxDefinitionConfig <a name="DataAzurermDevCenterDevBoxDefinitionConfig" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_dev_box_definition

dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dev_center_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermDevCenterDevBoxDefinitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.devCenterId">dev_center_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#dev_center_id DataAzurermDevCenterDevBoxDefinition#dev_center_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#name DataAzurermDevCenterDevBoxDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#id DataAzurermDevCenterDevBoxDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeouts">DataAzurermDevCenterDevBoxDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dev_center_id`<sup>Required</sup> <a name="dev_center_id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.devCenterId"></a>

```python
dev_center_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#dev_center_id DataAzurermDevCenterDevBoxDefinition#dev_center_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#name DataAzurermDevCenterDevBoxDefinition#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#id DataAzurermDevCenterDevBoxDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionConfig.property.timeouts"></a>

```python
timeouts: DataAzurermDevCenterDevBoxDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeouts">DataAzurermDevCenterDevBoxDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#timeouts DataAzurermDevCenterDevBoxDefinition#timeouts}

---

### DataAzurermDevCenterDevBoxDefinitionTimeouts <a name="DataAzurermDevCenterDevBoxDefinitionTimeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_dev_box_definition

dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#read DataAzurermDevCenterDevBoxDefinition#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/dev_center_dev_box_definition#read DataAzurermDevCenterDevBoxDefinition#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference <a name="DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dev_center_dev_box_definition

dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeouts">DataAzurermDevCenterDevBoxDefinitionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermDevCenterDevBoxDefinitionTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterDevBoxDefinition.DataAzurermDevCenterDevBoxDefinitionTimeouts">DataAzurermDevCenterDevBoxDefinitionTimeouts</a>

---



