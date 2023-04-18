# `azurerm_media_transform`

Refer to the Terraform Registory for docs: [`azurerm_media_transform`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform).

# `mediaTransform` Submodule <a name="`mediaTransform` Submodule" id="@cdktf/provider-azurerm.mediaTransform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaTransform <a name="MediaTransform" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform azurerm_media_transform}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransform(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  media_services_account_name: str,
  name: str,
  resource_group_name: str,
  description: str = None,
  id: str = None,
  output: typing.Union[IResolvable, typing.List[MediaTransformOutput]] = None,
  timeouts: MediaTransformTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#media_services_account_name MediaTransform#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#name MediaTransform#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#resource_group_name MediaTransform#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#description MediaTransform#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#id MediaTransform#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.output">output</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>]]</code> | output block. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.mediaServicesAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#media_services_account_name MediaTransform#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#name MediaTransform#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#resource_group_name MediaTransform#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#description MediaTransform#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#id MediaTransform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.output"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>]]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#output MediaTransform#output}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#timeouts MediaTransform#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.putOutput">put_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetOutput">reset_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_output` <a name="put_output" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putOutput"></a>

```python
def put_output(
  value: typing.Union[IResolvable, typing.List[MediaTransformOutput]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putOutput.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#create MediaTransform#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#delete MediaTransform#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#read MediaTransform#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#update MediaTransform#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_output` <a name="reset_output" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetOutput"></a>

```python
def reset_output() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransform.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransform.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransform.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.output">output</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList">MediaTransformOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference">MediaTransformTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.mediaServicesAccountNameInput">media_services_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.outputInput">output_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.output"></a>

```python
output: MediaTransformOutputList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList">MediaTransformOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.timeouts"></a>

```python
timeouts: MediaTransformTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference">MediaTransformTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `media_services_account_name_input`<sup>Optional</sup> <a name="media_services_account_name_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.mediaServicesAccountNameInput"></a>

```python
media_services_account_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.outputInput"></a>

```python
output_input: typing.Union[IResolvable, typing.List[MediaTransformOutput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>]]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[MediaTransformTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.mediaServicesAccountName"></a>

```python
media_services_account_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaTransformConfig <a name="MediaTransformConfig" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransformConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  media_services_account_name: str,
  name: str,
  resource_group_name: str,
  description: str = None,
  id: str = None,
  output: typing.Union[IResolvable, typing.List[MediaTransformOutput]] = None,
  timeouts: MediaTransformTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#media_services_account_name MediaTransform#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#name MediaTransform#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#resource_group_name MediaTransform#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#description MediaTransform#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#id MediaTransform#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.output">output</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>]]</code> | output block. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.mediaServicesAccountName"></a>

```python
media_services_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#media_services_account_name MediaTransform#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#name MediaTransform#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#resource_group_name MediaTransform#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#description MediaTransform#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#id MediaTransform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.output"></a>

```python
output: typing.Union[IResolvable, typing.List[MediaTransformOutput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>]]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#output MediaTransform#output}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.timeouts"></a>

```python
timeouts: MediaTransformTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#timeouts MediaTransform#timeouts}

---

### MediaTransformOutput <a name="MediaTransformOutput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransformOutput(
  audio_analyzer_preset: MediaTransformOutputAudioAnalyzerPreset = None,
  builtin_preset: MediaTransformOutputBuiltinPreset = None,
  face_detector_preset: MediaTransformOutputFaceDetectorPreset = None,
  on_error_action: str = None,
  relative_priority: str = None,
  video_analyzer_preset: MediaTransformOutputVideoAnalyzerPreset = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.audioAnalyzerPreset">audio_analyzer_preset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a></code> | audio_analyzer_preset block. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.builtinPreset">builtin_preset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a></code> | builtin_preset block. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.faceDetectorPreset">face_detector_preset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a></code> | face_detector_preset block. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.onErrorAction">on_error_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#on_error_action MediaTransform#on_error_action}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.relativePriority">relative_priority</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#relative_priority MediaTransform#relative_priority}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.videoAnalyzerPreset">video_analyzer_preset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a></code> | video_analyzer_preset block. |

---

##### `audio_analyzer_preset`<sup>Optional</sup> <a name="audio_analyzer_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.audioAnalyzerPreset"></a>

```python
audio_analyzer_preset: MediaTransformOutputAudioAnalyzerPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a>

audio_analyzer_preset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_analyzer_preset MediaTransform#audio_analyzer_preset}

---

##### `builtin_preset`<sup>Optional</sup> <a name="builtin_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.builtinPreset"></a>

```python
builtin_preset: MediaTransformOutputBuiltinPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a>

builtin_preset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#builtin_preset MediaTransform#builtin_preset}

---

##### `face_detector_preset`<sup>Optional</sup> <a name="face_detector_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.faceDetectorPreset"></a>

```python
face_detector_preset: MediaTransformOutputFaceDetectorPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a>

face_detector_preset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#face_detector_preset MediaTransform#face_detector_preset}

---

##### `on_error_action`<sup>Optional</sup> <a name="on_error_action" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.onErrorAction"></a>

```python
on_error_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#on_error_action MediaTransform#on_error_action}.

---

##### `relative_priority`<sup>Optional</sup> <a name="relative_priority" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.relativePriority"></a>

```python
relative_priority: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#relative_priority MediaTransform#relative_priority}.

---

##### `video_analyzer_preset`<sup>Optional</sup> <a name="video_analyzer_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.videoAnalyzerPreset"></a>

```python
video_analyzer_preset: MediaTransformOutputVideoAnalyzerPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a>

video_analyzer_preset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#video_analyzer_preset MediaTransform#video_analyzer_preset}

---

### MediaTransformOutputAudioAnalyzerPreset <a name="MediaTransformOutputAudioAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransformOutputAudioAnalyzerPreset(
  audio_analysis_mode: str = None,
  audio_language: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.property.audioAnalysisMode">audio_analysis_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.property.audioLanguage">audio_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_language MediaTransform#audio_language}. |

---

##### `audio_analysis_mode`<sup>Optional</sup> <a name="audio_analysis_mode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.property.audioAnalysisMode"></a>

```python
audio_analysis_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}.

---

##### `audio_language`<sup>Optional</sup> <a name="audio_language" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.property.audioLanguage"></a>

```python
audio_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_language MediaTransform#audio_language}.

---

### MediaTransformOutputBuiltinPreset <a name="MediaTransformOutputBuiltinPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransformOutputBuiltinPreset(
  preset_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset.property.presetName">preset_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#preset_name MediaTransform#preset_name}. |

---

##### `preset_name`<sup>Required</sup> <a name="preset_name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset.property.presetName"></a>

```python
preset_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#preset_name MediaTransform#preset_name}.

---

### MediaTransformOutputFaceDetectorPreset <a name="MediaTransformOutputFaceDetectorPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransformOutputFaceDetectorPreset(
  analysis_resolution: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset.property.analysisResolution">analysis_resolution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#analysis_resolution MediaTransform#analysis_resolution}. |

---

##### `analysis_resolution`<sup>Optional</sup> <a name="analysis_resolution" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset.property.analysisResolution"></a>

```python
analysis_resolution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#analysis_resolution MediaTransform#analysis_resolution}.

---

### MediaTransformOutputVideoAnalyzerPreset <a name="MediaTransformOutputVideoAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransformOutputVideoAnalyzerPreset(
  audio_analysis_mode: str = None,
  audio_language: str = None,
  insights_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.audioAnalysisMode">audio_analysis_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.audioLanguage">audio_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_language MediaTransform#audio_language}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.insightsType">insights_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#insights_type MediaTransform#insights_type}. |

---

##### `audio_analysis_mode`<sup>Optional</sup> <a name="audio_analysis_mode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.audioAnalysisMode"></a>

```python
audio_analysis_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}.

---

##### `audio_language`<sup>Optional</sup> <a name="audio_language" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.audioLanguage"></a>

```python
audio_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_language MediaTransform#audio_language}.

---

##### `insights_type`<sup>Optional</sup> <a name="insights_type" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.insightsType"></a>

```python
insights_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#insights_type MediaTransform#insights_type}.

---

### MediaTransformTimeouts <a name="MediaTransformTimeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransformTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#create MediaTransform#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#delete MediaTransform#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#read MediaTransform#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#update MediaTransform#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#create MediaTransform#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#delete MediaTransform#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#read MediaTransform#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#update MediaTransform#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaTransformOutputAudioAnalyzerPresetOutputReference <a name="MediaTransformOutputAudioAnalyzerPresetOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resetAudioAnalysisMode">reset_audio_analysis_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resetAudioLanguage">reset_audio_language</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audio_analysis_mode` <a name="reset_audio_analysis_mode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resetAudioAnalysisMode"></a>

```python
def reset_audio_analysis_mode() -> None
```

##### `reset_audio_language` <a name="reset_audio_language" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resetAudioLanguage"></a>

```python
def reset_audio_language() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioAnalysisModeInput">audio_analysis_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioLanguageInput">audio_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioAnalysisMode">audio_analysis_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioLanguage">audio_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_analysis_mode_input`<sup>Optional</sup> <a name="audio_analysis_mode_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioAnalysisModeInput"></a>

```python
audio_analysis_mode_input: str
```

- *Type:* str

---

##### `audio_language_input`<sup>Optional</sup> <a name="audio_language_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioLanguageInput"></a>

```python
audio_language_input: str
```

- *Type:* str

---

##### `audio_analysis_mode`<sup>Required</sup> <a name="audio_analysis_mode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioAnalysisMode"></a>

```python
audio_analysis_mode: str
```

- *Type:* str

---

##### `audio_language`<sup>Required</sup> <a name="audio_language" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioLanguage"></a>

```python
audio_language: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.internalValue"></a>

```python
internal_value: MediaTransformOutputAudioAnalyzerPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a>

---


### MediaTransformOutputBuiltinPresetOutputReference <a name="MediaTransformOutputBuiltinPresetOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransformOutputBuiltinPresetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.presetNameInput">preset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.presetName">preset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preset_name_input`<sup>Optional</sup> <a name="preset_name_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.presetNameInput"></a>

```python
preset_name_input: str
```

- *Type:* str

---

##### `preset_name`<sup>Required</sup> <a name="preset_name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.presetName"></a>

```python
preset_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.internalValue"></a>

```python
internal_value: MediaTransformOutputBuiltinPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a>

---


### MediaTransformOutputFaceDetectorPresetOutputReference <a name="MediaTransformOutputFaceDetectorPresetOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resetAnalysisResolution">reset_analysis_resolution</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_analysis_resolution` <a name="reset_analysis_resolution" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resetAnalysisResolution"></a>

```python
def reset_analysis_resolution() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.analysisResolutionInput">analysis_resolution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.analysisResolution">analysis_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis_resolution_input`<sup>Optional</sup> <a name="analysis_resolution_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.analysisResolutionInput"></a>

```python
analysis_resolution_input: str
```

- *Type:* str

---

##### `analysis_resolution`<sup>Required</sup> <a name="analysis_resolution" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.analysisResolution"></a>

```python
analysis_resolution: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.internalValue"></a>

```python
internal_value: MediaTransformOutputFaceDetectorPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a>

---


### MediaTransformOutputList <a name="MediaTransformOutputList" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransformOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaTransformOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaTransformOutput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>]]

---


### MediaTransformOutputOutputReference <a name="MediaTransformOutputOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransformOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putAudioAnalyzerPreset">put_audio_analyzer_preset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putBuiltinPreset">put_builtin_preset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putFaceDetectorPreset">put_face_detector_preset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putVideoAnalyzerPreset">put_video_analyzer_preset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetAudioAnalyzerPreset">reset_audio_analyzer_preset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetBuiltinPreset">reset_builtin_preset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetFaceDetectorPreset">reset_face_detector_preset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetOnErrorAction">reset_on_error_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetRelativePriority">reset_relative_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetVideoAnalyzerPreset">reset_video_analyzer_preset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audio_analyzer_preset` <a name="put_audio_analyzer_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putAudioAnalyzerPreset"></a>

```python
def put_audio_analyzer_preset(
  audio_analysis_mode: str = None,
  audio_language: str = None
) -> None
```

###### `audio_analysis_mode`<sup>Optional</sup> <a name="audio_analysis_mode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putAudioAnalyzerPreset.parameter.audioAnalysisMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}.

---

###### `audio_language`<sup>Optional</sup> <a name="audio_language" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putAudioAnalyzerPreset.parameter.audioLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_language MediaTransform#audio_language}.

---

##### `put_builtin_preset` <a name="put_builtin_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putBuiltinPreset"></a>

```python
def put_builtin_preset(
  preset_name: str
) -> None
```

###### `preset_name`<sup>Required</sup> <a name="preset_name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putBuiltinPreset.parameter.presetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#preset_name MediaTransform#preset_name}.

---

##### `put_face_detector_preset` <a name="put_face_detector_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putFaceDetectorPreset"></a>

```python
def put_face_detector_preset(
  analysis_resolution: str = None
) -> None
```

###### `analysis_resolution`<sup>Optional</sup> <a name="analysis_resolution" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putFaceDetectorPreset.parameter.analysisResolution"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#analysis_resolution MediaTransform#analysis_resolution}.

---

##### `put_video_analyzer_preset` <a name="put_video_analyzer_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putVideoAnalyzerPreset"></a>

```python
def put_video_analyzer_preset(
  audio_analysis_mode: str = None,
  audio_language: str = None,
  insights_type: str = None
) -> None
```

###### `audio_analysis_mode`<sup>Optional</sup> <a name="audio_analysis_mode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putVideoAnalyzerPreset.parameter.audioAnalysisMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}.

---

###### `audio_language`<sup>Optional</sup> <a name="audio_language" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putVideoAnalyzerPreset.parameter.audioLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#audio_language MediaTransform#audio_language}.

---

###### `insights_type`<sup>Optional</sup> <a name="insights_type" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putVideoAnalyzerPreset.parameter.insightsType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/media_transform#insights_type MediaTransform#insights_type}.

---

##### `reset_audio_analyzer_preset` <a name="reset_audio_analyzer_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetAudioAnalyzerPreset"></a>

```python
def reset_audio_analyzer_preset() -> None
```

##### `reset_builtin_preset` <a name="reset_builtin_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetBuiltinPreset"></a>

```python
def reset_builtin_preset() -> None
```

##### `reset_face_detector_preset` <a name="reset_face_detector_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetFaceDetectorPreset"></a>

```python
def reset_face_detector_preset() -> None
```

##### `reset_on_error_action` <a name="reset_on_error_action" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetOnErrorAction"></a>

```python
def reset_on_error_action() -> None
```

##### `reset_relative_priority` <a name="reset_relative_priority" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetRelativePriority"></a>

```python
def reset_relative_priority() -> None
```

##### `reset_video_analyzer_preset` <a name="reset_video_analyzer_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetVideoAnalyzerPreset"></a>

```python
def reset_video_analyzer_preset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.audioAnalyzerPreset">audio_analyzer_preset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference">MediaTransformOutputAudioAnalyzerPresetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.builtinPreset">builtin_preset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference">MediaTransformOutputBuiltinPresetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.faceDetectorPreset">face_detector_preset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference">MediaTransformOutputFaceDetectorPresetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.videoAnalyzerPreset">video_analyzer_preset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference">MediaTransformOutputVideoAnalyzerPresetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.audioAnalyzerPresetInput">audio_analyzer_preset_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.builtinPresetInput">builtin_preset_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.faceDetectorPresetInput">face_detector_preset_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.onErrorActionInput">on_error_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.relativePriorityInput">relative_priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.videoAnalyzerPresetInput">video_analyzer_preset_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.onErrorAction">on_error_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.relativePriority">relative_priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_analyzer_preset`<sup>Required</sup> <a name="audio_analyzer_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.audioAnalyzerPreset"></a>

```python
audio_analyzer_preset: MediaTransformOutputAudioAnalyzerPresetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference">MediaTransformOutputAudioAnalyzerPresetOutputReference</a>

---

##### `builtin_preset`<sup>Required</sup> <a name="builtin_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.builtinPreset"></a>

```python
builtin_preset: MediaTransformOutputBuiltinPresetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference">MediaTransformOutputBuiltinPresetOutputReference</a>

---

##### `face_detector_preset`<sup>Required</sup> <a name="face_detector_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.faceDetectorPreset"></a>

```python
face_detector_preset: MediaTransformOutputFaceDetectorPresetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference">MediaTransformOutputFaceDetectorPresetOutputReference</a>

---

##### `video_analyzer_preset`<sup>Required</sup> <a name="video_analyzer_preset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.videoAnalyzerPreset"></a>

```python
video_analyzer_preset: MediaTransformOutputVideoAnalyzerPresetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference">MediaTransformOutputVideoAnalyzerPresetOutputReference</a>

---

##### `audio_analyzer_preset_input`<sup>Optional</sup> <a name="audio_analyzer_preset_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.audioAnalyzerPresetInput"></a>

```python
audio_analyzer_preset_input: MediaTransformOutputAudioAnalyzerPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a>

---

##### `builtin_preset_input`<sup>Optional</sup> <a name="builtin_preset_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.builtinPresetInput"></a>

```python
builtin_preset_input: MediaTransformOutputBuiltinPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a>

---

##### `face_detector_preset_input`<sup>Optional</sup> <a name="face_detector_preset_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.faceDetectorPresetInput"></a>

```python
face_detector_preset_input: MediaTransformOutputFaceDetectorPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a>

---

##### `on_error_action_input`<sup>Optional</sup> <a name="on_error_action_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.onErrorActionInput"></a>

```python
on_error_action_input: str
```

- *Type:* str

---

##### `relative_priority_input`<sup>Optional</sup> <a name="relative_priority_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.relativePriorityInput"></a>

```python
relative_priority_input: str
```

- *Type:* str

---

##### `video_analyzer_preset_input`<sup>Optional</sup> <a name="video_analyzer_preset_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.videoAnalyzerPresetInput"></a>

```python
video_analyzer_preset_input: MediaTransformOutputVideoAnalyzerPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a>

---

##### `on_error_action`<sup>Required</sup> <a name="on_error_action" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.onErrorAction"></a>

```python
on_error_action: str
```

- *Type:* str

---

##### `relative_priority`<sup>Required</sup> <a name="relative_priority" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.relativePriority"></a>

```python
relative_priority: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MediaTransformOutput, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput">MediaTransformOutput</a>, cdktf.IResolvable]

---


### MediaTransformOutputVideoAnalyzerPresetOutputReference <a name="MediaTransformOutputVideoAnalyzerPresetOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetAudioAnalysisMode">reset_audio_analysis_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetAudioLanguage">reset_audio_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetInsightsType">reset_insights_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audio_analysis_mode` <a name="reset_audio_analysis_mode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetAudioAnalysisMode"></a>

```python
def reset_audio_analysis_mode() -> None
```

##### `reset_audio_language` <a name="reset_audio_language" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetAudioLanguage"></a>

```python
def reset_audio_language() -> None
```

##### `reset_insights_type` <a name="reset_insights_type" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetInsightsType"></a>

```python
def reset_insights_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioAnalysisModeInput">audio_analysis_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioLanguageInput">audio_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.insightsTypeInput">insights_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioAnalysisMode">audio_analysis_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioLanguage">audio_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.insightsType">insights_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_analysis_mode_input`<sup>Optional</sup> <a name="audio_analysis_mode_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioAnalysisModeInput"></a>

```python
audio_analysis_mode_input: str
```

- *Type:* str

---

##### `audio_language_input`<sup>Optional</sup> <a name="audio_language_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioLanguageInput"></a>

```python
audio_language_input: str
```

- *Type:* str

---

##### `insights_type_input`<sup>Optional</sup> <a name="insights_type_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.insightsTypeInput"></a>

```python
insights_type_input: str
```

- *Type:* str

---

##### `audio_analysis_mode`<sup>Required</sup> <a name="audio_analysis_mode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioAnalysisMode"></a>

```python
audio_analysis_mode: str
```

- *Type:* str

---

##### `audio_language`<sup>Required</sup> <a name="audio_language" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioLanguage"></a>

```python
audio_language: str
```

- *Type:* str

---

##### `insights_type`<sup>Required</sup> <a name="insights_type" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.insightsType"></a>

```python
insights_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.internalValue"></a>

```python
internal_value: MediaTransformOutputVideoAnalyzerPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a>

---


### MediaTransformTimeoutsOutputReference <a name="MediaTransformTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_transform

mediaTransform.MediaTransformTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MediaTransformTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a>, cdktf.IResolvable]

---



