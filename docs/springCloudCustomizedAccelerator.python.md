# `azurerm_spring_cloud_customized_accelerator`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_customized_accelerator`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator).

# `springCloudCustomizedAccelerator` Submodule <a name="`springCloudCustomizedAccelerator` Submodule" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudCustomizedAccelerator <a name="SpringCloudCustomizedAccelerator" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator azurerm_spring_cloud_customized_accelerator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_customized_accelerator

springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  git_repository: SpringCloudCustomizedAcceleratorGitRepository,
  name: str,
  spring_cloud_accelerator_id: str,
  accelerator_tags: typing.List[str] = None,
  description: str = None,
  display_name: str = None,
  icon_url: str = None,
  id: str = None,
  timeouts: SpringCloudCustomizedAcceleratorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.gitRepository">git_repository</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#name SpringCloudCustomizedAccelerator#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.springCloudAcceleratorId">spring_cloud_accelerator_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#spring_cloud_accelerator_id SpringCloudCustomizedAccelerator#spring_cloud_accelerator_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.acceleratorTags">accelerator_tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#accelerator_tags SpringCloudCustomizedAccelerator#accelerator_tags}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#description SpringCloudCustomizedAccelerator#description}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#display_name SpringCloudCustomizedAccelerator#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.iconUrl">icon_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#icon_url SpringCloudCustomizedAccelerator#icon_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#id SpringCloudCustomizedAccelerator#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `git_repository`<sup>Required</sup> <a name="git_repository" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.gitRepository"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#git_repository SpringCloudCustomizedAccelerator#git_repository}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#name SpringCloudCustomizedAccelerator#name}.

---

##### `spring_cloud_accelerator_id`<sup>Required</sup> <a name="spring_cloud_accelerator_id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.springCloudAcceleratorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#spring_cloud_accelerator_id SpringCloudCustomizedAccelerator#spring_cloud_accelerator_id}.

---

##### `accelerator_tags`<sup>Optional</sup> <a name="accelerator_tags" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.acceleratorTags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#accelerator_tags SpringCloudCustomizedAccelerator#accelerator_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#description SpringCloudCustomizedAccelerator#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#display_name SpringCloudCustomizedAccelerator#display_name}.

---

##### `icon_url`<sup>Optional</sup> <a name="icon_url" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.iconUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#icon_url SpringCloudCustomizedAccelerator#icon_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#id SpringCloudCustomizedAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#timeouts SpringCloudCustomizedAccelerator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository">put_git_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetAcceleratorTags">reset_accelerator_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetIconUrl">reset_icon_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_git_repository` <a name="put_git_repository" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository"></a>

```python
def put_git_repository(
  url: str,
  basic_auth: SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth = None,
  branch: str = None,
  ca_certificate_id: str = None,
  commit: str = None,
  git_tag: str = None,
  interval_in_seconds: typing.Union[int, float] = None,
  ssh_auth: SpringCloudCustomizedAcceleratorGitRepositorySshAuth = None
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#url SpringCloudCustomizedAccelerator#url}.

---

###### `basic_auth`<sup>Optional</sup> <a name="basic_auth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository.parameter.basicAuth"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#basic_auth SpringCloudCustomizedAccelerator#basic_auth}

---

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository.parameter.branch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#branch SpringCloudCustomizedAccelerator#branch}.

---

###### `ca_certificate_id`<sup>Optional</sup> <a name="ca_certificate_id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository.parameter.caCertificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#ca_certificate_id SpringCloudCustomizedAccelerator#ca_certificate_id}.

---

###### `commit`<sup>Optional</sup> <a name="commit" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository.parameter.commit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#commit SpringCloudCustomizedAccelerator#commit}.

---

###### `git_tag`<sup>Optional</sup> <a name="git_tag" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository.parameter.gitTag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#git_tag SpringCloudCustomizedAccelerator#git_tag}.

---

###### `interval_in_seconds`<sup>Optional</sup> <a name="interval_in_seconds" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository.parameter.intervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#interval_in_seconds SpringCloudCustomizedAccelerator#interval_in_seconds}.

---

###### `ssh_auth`<sup>Optional</sup> <a name="ssh_auth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putGitRepository.parameter.sshAuth"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a>

ssh_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#ssh_auth SpringCloudCustomizedAccelerator#ssh_auth}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#create SpringCloudCustomizedAccelerator#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#delete SpringCloudCustomizedAccelerator#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#read SpringCloudCustomizedAccelerator#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#update SpringCloudCustomizedAccelerator#update}.

---

##### `reset_accelerator_tags` <a name="reset_accelerator_tags" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetAcceleratorTags"></a>

```python
def reset_accelerator_tags() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_icon_url` <a name="reset_icon_url" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetIconUrl"></a>

```python
def reset_icon_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_customized_accelerator

springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_customized_accelerator

springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_customized_accelerator

springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.gitRepository">git_repository</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference">SpringCloudCustomizedAcceleratorGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference">SpringCloudCustomizedAcceleratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorTagsInput">accelerator_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.gitRepositoryInput">git_repository_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.iconUrlInput">icon_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.springCloudAcceleratorIdInput">spring_cloud_accelerator_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorTags">accelerator_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.iconUrl">icon_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.springCloudAcceleratorId">spring_cloud_accelerator_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `git_repository`<sup>Required</sup> <a name="git_repository" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.gitRepository"></a>

```python
git_repository: SpringCloudCustomizedAcceleratorGitRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference">SpringCloudCustomizedAcceleratorGitRepositoryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.timeouts"></a>

```python
timeouts: SpringCloudCustomizedAcceleratorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference">SpringCloudCustomizedAcceleratorTimeoutsOutputReference</a>

---

##### `accelerator_tags_input`<sup>Optional</sup> <a name="accelerator_tags_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorTagsInput"></a>

```python
accelerator_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `git_repository_input`<sup>Optional</sup> <a name="git_repository_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.gitRepositoryInput"></a>

```python
git_repository_input: SpringCloudCustomizedAcceleratorGitRepository
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a>

---

##### `icon_url_input`<sup>Optional</sup> <a name="icon_url_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.iconUrlInput"></a>

```python
icon_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `spring_cloud_accelerator_id_input`<sup>Optional</sup> <a name="spring_cloud_accelerator_id_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.springCloudAcceleratorIdInput"></a>

```python
spring_cloud_accelerator_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SpringCloudCustomizedAcceleratorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>]

---

##### `accelerator_tags`<sup>Required</sup> <a name="accelerator_tags" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.acceleratorTags"></a>

```python
accelerator_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `icon_url`<sup>Required</sup> <a name="icon_url" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.iconUrl"></a>

```python
icon_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `spring_cloud_accelerator_id`<sup>Required</sup> <a name="spring_cloud_accelerator_id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.springCloudAcceleratorId"></a>

```python
spring_cloud_accelerator_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAccelerator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudCustomizedAcceleratorConfig <a name="SpringCloudCustomizedAcceleratorConfig" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_customized_accelerator

springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  git_repository: SpringCloudCustomizedAcceleratorGitRepository,
  name: str,
  spring_cloud_accelerator_id: str,
  accelerator_tags: typing.List[str] = None,
  description: str = None,
  display_name: str = None,
  icon_url: str = None,
  id: str = None,
  timeouts: SpringCloudCustomizedAcceleratorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.gitRepository">git_repository</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#name SpringCloudCustomizedAccelerator#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.springCloudAcceleratorId">spring_cloud_accelerator_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#spring_cloud_accelerator_id SpringCloudCustomizedAccelerator#spring_cloud_accelerator_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.acceleratorTags">accelerator_tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#accelerator_tags SpringCloudCustomizedAccelerator#accelerator_tags}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#description SpringCloudCustomizedAccelerator#description}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#display_name SpringCloudCustomizedAccelerator#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.iconUrl">icon_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#icon_url SpringCloudCustomizedAccelerator#icon_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#id SpringCloudCustomizedAccelerator#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `git_repository`<sup>Required</sup> <a name="git_repository" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.gitRepository"></a>

```python
git_repository: SpringCloudCustomizedAcceleratorGitRepository
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#git_repository SpringCloudCustomizedAccelerator#git_repository}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#name SpringCloudCustomizedAccelerator#name}.

---

##### `spring_cloud_accelerator_id`<sup>Required</sup> <a name="spring_cloud_accelerator_id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.springCloudAcceleratorId"></a>

```python
spring_cloud_accelerator_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#spring_cloud_accelerator_id SpringCloudCustomizedAccelerator#spring_cloud_accelerator_id}.

---

##### `accelerator_tags`<sup>Optional</sup> <a name="accelerator_tags" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.acceleratorTags"></a>

```python
accelerator_tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#accelerator_tags SpringCloudCustomizedAccelerator#accelerator_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#description SpringCloudCustomizedAccelerator#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#display_name SpringCloudCustomizedAccelerator#display_name}.

---

##### `icon_url`<sup>Optional</sup> <a name="icon_url" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.iconUrl"></a>

```python
icon_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#icon_url SpringCloudCustomizedAccelerator#icon_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#id SpringCloudCustomizedAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorConfig.property.timeouts"></a>

```python
timeouts: SpringCloudCustomizedAcceleratorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#timeouts SpringCloudCustomizedAccelerator#timeouts}

---

### SpringCloudCustomizedAcceleratorGitRepository <a name="SpringCloudCustomizedAcceleratorGitRepository" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_customized_accelerator

springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository(
  url: str,
  basic_auth: SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth = None,
  branch: str = None,
  ca_certificate_id: str = None,
  commit: str = None,
  git_tag: str = None,
  interval_in_seconds: typing.Union[int, float] = None,
  ssh_auth: SpringCloudCustomizedAcceleratorGitRepositorySshAuth = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#url SpringCloudCustomizedAccelerator#url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.basicAuth">basic_auth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a></code> | basic_auth block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#branch SpringCloudCustomizedAccelerator#branch}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.caCertificateId">ca_certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#ca_certificate_id SpringCloudCustomizedAccelerator#ca_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.commit">commit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#commit SpringCloudCustomizedAccelerator#commit}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.gitTag">git_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#git_tag SpringCloudCustomizedAccelerator#git_tag}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#interval_in_seconds SpringCloudCustomizedAccelerator#interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.sshAuth">ssh_auth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a></code> | ssh_auth block. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#url SpringCloudCustomizedAccelerator#url}.

---

##### `basic_auth`<sup>Optional</sup> <a name="basic_auth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.basicAuth"></a>

```python
basic_auth: SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#basic_auth SpringCloudCustomizedAccelerator#basic_auth}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#branch SpringCloudCustomizedAccelerator#branch}.

---

##### `ca_certificate_id`<sup>Optional</sup> <a name="ca_certificate_id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.caCertificateId"></a>

```python
ca_certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#ca_certificate_id SpringCloudCustomizedAccelerator#ca_certificate_id}.

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.commit"></a>

```python
commit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#commit SpringCloudCustomizedAccelerator#commit}.

---

##### `git_tag`<sup>Optional</sup> <a name="git_tag" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.gitTag"></a>

```python
git_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#git_tag SpringCloudCustomizedAccelerator#git_tag}.

---

##### `interval_in_seconds`<sup>Optional</sup> <a name="interval_in_seconds" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#interval_in_seconds SpringCloudCustomizedAccelerator#interval_in_seconds}.

---

##### `ssh_auth`<sup>Optional</sup> <a name="ssh_auth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository.property.sshAuth"></a>

```python
ssh_auth: SpringCloudCustomizedAcceleratorGitRepositorySshAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a>

ssh_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#ssh_auth SpringCloudCustomizedAccelerator#ssh_auth}

---

### SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth <a name="SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_customized_accelerator

springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#password SpringCloudCustomizedAccelerator#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#username SpringCloudCustomizedAccelerator#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#password SpringCloudCustomizedAccelerator#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#username SpringCloudCustomizedAccelerator#username}.

---

### SpringCloudCustomizedAcceleratorGitRepositorySshAuth <a name="SpringCloudCustomizedAcceleratorGitRepositorySshAuth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_customized_accelerator

springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth(
  private_key: str,
  host_key: str = None,
  host_key_algorithm: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#private_key SpringCloudCustomizedAccelerator#private_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.hostKey">host_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#host_key SpringCloudCustomizedAccelerator#host_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.hostKeyAlgorithm">host_key_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#host_key_algorithm SpringCloudCustomizedAccelerator#host_key_algorithm}. |

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#private_key SpringCloudCustomizedAccelerator#private_key}.

---

##### `host_key`<sup>Optional</sup> <a name="host_key" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.hostKey"></a>

```python
host_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#host_key SpringCloudCustomizedAccelerator#host_key}.

---

##### `host_key_algorithm`<sup>Optional</sup> <a name="host_key_algorithm" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth.property.hostKeyAlgorithm"></a>

```python
host_key_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#host_key_algorithm SpringCloudCustomizedAccelerator#host_key_algorithm}.

---

### SpringCloudCustomizedAcceleratorTimeouts <a name="SpringCloudCustomizedAcceleratorTimeouts" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_customized_accelerator

springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#create SpringCloudCustomizedAccelerator#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#delete SpringCloudCustomizedAccelerator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#read SpringCloudCustomizedAccelerator#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#update SpringCloudCustomizedAccelerator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#create SpringCloudCustomizedAccelerator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#delete SpringCloudCustomizedAccelerator#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#read SpringCloudCustomizedAccelerator#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#update SpringCloudCustomizedAccelerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference <a name="SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_customized_accelerator

springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a>

---


### SpringCloudCustomizedAcceleratorGitRepositoryOutputReference <a name="SpringCloudCustomizedAcceleratorGitRepositoryOutputReference" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_customized_accelerator

springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putBasicAuth">put_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putSshAuth">put_ssh_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetBasicAuth">reset_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetCaCertificateId">reset_ca_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetCommit">reset_commit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetGitTag">reset_git_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetIntervalInSeconds">reset_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetSshAuth">reset_ssh_auth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic_auth` <a name="put_basic_auth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putBasicAuth"></a>

```python
def put_basic_auth(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putBasicAuth.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#password SpringCloudCustomizedAccelerator#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putBasicAuth.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#username SpringCloudCustomizedAccelerator#username}.

---

##### `put_ssh_auth` <a name="put_ssh_auth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putSshAuth"></a>

```python
def put_ssh_auth(
  private_key: str,
  host_key: str = None,
  host_key_algorithm: str = None
) -> None
```

###### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putSshAuth.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#private_key SpringCloudCustomizedAccelerator#private_key}.

---

###### `host_key`<sup>Optional</sup> <a name="host_key" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putSshAuth.parameter.hostKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#host_key SpringCloudCustomizedAccelerator#host_key}.

---

###### `host_key_algorithm`<sup>Optional</sup> <a name="host_key_algorithm" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.putSshAuth.parameter.hostKeyAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/spring_cloud_customized_accelerator#host_key_algorithm SpringCloudCustomizedAccelerator#host_key_algorithm}.

---

##### `reset_basic_auth` <a name="reset_basic_auth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetBasicAuth"></a>

```python
def reset_basic_auth() -> None
```

##### `reset_branch` <a name="reset_branch" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_ca_certificate_id` <a name="reset_ca_certificate_id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetCaCertificateId"></a>

```python
def reset_ca_certificate_id() -> None
```

##### `reset_commit` <a name="reset_commit" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetCommit"></a>

```python
def reset_commit() -> None
```

##### `reset_git_tag` <a name="reset_git_tag" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetGitTag"></a>

```python
def reset_git_tag() -> None
```

##### `reset_interval_in_seconds` <a name="reset_interval_in_seconds" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetIntervalInSeconds"></a>

```python
def reset_interval_in_seconds() -> None
```

##### `reset_ssh_auth` <a name="reset_ssh_auth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.resetSshAuth"></a>

```python
def reset_ssh_auth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.basicAuth">basic_auth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.sshAuth">ssh_auth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference">SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.basicAuthInput">basic_auth_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.caCertificateIdInput">ca_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.commitInput">commit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.gitTagInput">git_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.intervalInSecondsInput">interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.sshAuthInput">ssh_auth_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.caCertificateId">ca_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.commit">commit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.gitTag">git_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_auth`<sup>Required</sup> <a name="basic_auth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.basicAuth"></a>

```python
basic_auth: SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuthOutputReference</a>

---

##### `ssh_auth`<sup>Required</sup> <a name="ssh_auth" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.sshAuth"></a>

```python
ssh_auth: SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference">SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference</a>

---

##### `basic_auth_input`<sup>Optional</sup> <a name="basic_auth_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.basicAuthInput"></a>

```python
basic_auth_input: SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth">SpringCloudCustomizedAcceleratorGitRepositoryBasicAuth</a>

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `ca_certificate_id_input`<sup>Optional</sup> <a name="ca_certificate_id_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.caCertificateIdInput"></a>

```python
ca_certificate_id_input: str
```

- *Type:* str

---

##### `commit_input`<sup>Optional</sup> <a name="commit_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.commitInput"></a>

```python
commit_input: str
```

- *Type:* str

---

##### `git_tag_input`<sup>Optional</sup> <a name="git_tag_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.gitTagInput"></a>

```python
git_tag_input: str
```

- *Type:* str

---

##### `interval_in_seconds_input`<sup>Optional</sup> <a name="interval_in_seconds_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.intervalInSecondsInput"></a>

```python
interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_auth_input`<sup>Optional</sup> <a name="ssh_auth_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.sshAuthInput"></a>

```python
ssh_auth_input: SpringCloudCustomizedAcceleratorGitRepositorySshAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a>

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `ca_certificate_id`<sup>Required</sup> <a name="ca_certificate_id" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.caCertificateId"></a>

```python
ca_certificate_id: str
```

- *Type:* str

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.commit"></a>

```python
commit: str
```

- *Type:* str

---

##### `git_tag`<sup>Required</sup> <a name="git_tag" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.gitTag"></a>

```python
git_tag: str
```

- *Type:* str

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudCustomizedAcceleratorGitRepository
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepository">SpringCloudCustomizedAcceleratorGitRepository</a>

---


### SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference <a name="SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_customized_accelerator

springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resetHostKey">reset_host_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resetHostKeyAlgorithm">reset_host_key_algorithm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host_key` <a name="reset_host_key" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resetHostKey"></a>

```python
def reset_host_key() -> None
```

##### `reset_host_key_algorithm` <a name="reset_host_key_algorithm" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.resetHostKeyAlgorithm"></a>

```python
def reset_host_key_algorithm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyAlgorithmInput">host_key_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyInput">host_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKey">host_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyAlgorithm">host_key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_key_algorithm_input`<sup>Optional</sup> <a name="host_key_algorithm_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyAlgorithmInput"></a>

```python
host_key_algorithm_input: str
```

- *Type:* str

---

##### `host_key_input`<sup>Optional</sup> <a name="host_key_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyInput"></a>

```python
host_key_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `host_key`<sup>Required</sup> <a name="host_key" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKey"></a>

```python
host_key: str
```

- *Type:* str

---

##### `host_key_algorithm`<sup>Required</sup> <a name="host_key_algorithm" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.hostKeyAlgorithm"></a>

```python
host_key_algorithm: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuthOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudCustomizedAcceleratorGitRepositorySshAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorGitRepositorySshAuth">SpringCloudCustomizedAcceleratorGitRepositorySshAuth</a>

---


### SpringCloudCustomizedAcceleratorTimeoutsOutputReference <a name="SpringCloudCustomizedAcceleratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_customized_accelerator

springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudCustomizedAcceleratorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudCustomizedAccelerator.SpringCloudCustomizedAcceleratorTimeouts">SpringCloudCustomizedAcceleratorTimeouts</a>]

---



