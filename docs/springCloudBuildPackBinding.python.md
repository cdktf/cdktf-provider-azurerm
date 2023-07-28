# `azurerm_spring_cloud_build_pack_binding`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_build_pack_binding`](https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding).

# `springCloudBuildPackBinding` Submodule <a name="`springCloudBuildPackBinding` Submodule" id="@cdktf/provider-azurerm.springCloudBuildPackBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudBuildPackBinding <a name="SpringCloudBuildPackBinding" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding azurerm_spring_cloud_build_pack_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_build_pack_binding

springCloudBuildPackBinding.SpringCloudBuildPackBinding(
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
  spring_cloud_builder_id: str,
  binding_type: str = None,
  id: str = None,
  launch: SpringCloudBuildPackBindingLaunch = None,
  timeouts: SpringCloudBuildPackBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#name SpringCloudBuildPackBinding#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.springCloudBuilderId">spring_cloud_builder_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#spring_cloud_builder_id SpringCloudBuildPackBinding#spring_cloud_builder_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.bindingType">binding_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#binding_type SpringCloudBuildPackBinding#binding_type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#id SpringCloudBuildPackBinding#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.launch">launch</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a></code> | launch block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts">SpringCloudBuildPackBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#name SpringCloudBuildPackBinding#name}.

---

##### `spring_cloud_builder_id`<sup>Required</sup> <a name="spring_cloud_builder_id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.springCloudBuilderId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#spring_cloud_builder_id SpringCloudBuildPackBinding#spring_cloud_builder_id}.

---

##### `binding_type`<sup>Optional</sup> <a name="binding_type" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.bindingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#binding_type SpringCloudBuildPackBinding#binding_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#id SpringCloudBuildPackBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launch`<sup>Optional</sup> <a name="launch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.launch"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a>

launch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#launch SpringCloudBuildPackBinding#launch}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts">SpringCloudBuildPackBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#timeouts SpringCloudBuildPackBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putLaunch">put_launch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetBindingType">reset_binding_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetLaunch">reset_launch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_launch` <a name="put_launch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putLaunch"></a>

```python
def put_launch(
  properties: typing.Mapping[str] = None,
  secrets: typing.Mapping[str] = None
) -> None
```

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putLaunch.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#properties SpringCloudBuildPackBinding#properties}.

---

###### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putLaunch.parameter.secrets"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#secrets SpringCloudBuildPackBinding#secrets}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#create SpringCloudBuildPackBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#delete SpringCloudBuildPackBinding#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#read SpringCloudBuildPackBinding#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#update SpringCloudBuildPackBinding#update}.

---

##### `reset_binding_type` <a name="reset_binding_type" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetBindingType"></a>

```python
def reset_binding_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_launch` <a name="reset_launch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetLaunch"></a>

```python
def reset_launch() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_build_pack_binding

springCloudBuildPackBinding.SpringCloudBuildPackBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_build_pack_binding

springCloudBuildPackBinding.SpringCloudBuildPackBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_build_pack_binding

springCloudBuildPackBinding.SpringCloudBuildPackBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.launch">launch</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference">SpringCloudBuildPackBindingLaunchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference">SpringCloudBuildPackBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.bindingTypeInput">binding_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.launchInput">launch_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.springCloudBuilderIdInput">spring_cloud_builder_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts">SpringCloudBuildPackBindingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.bindingType">binding_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.springCloudBuilderId">spring_cloud_builder_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `launch`<sup>Required</sup> <a name="launch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.launch"></a>

```python
launch: SpringCloudBuildPackBindingLaunchOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference">SpringCloudBuildPackBindingLaunchOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.timeouts"></a>

```python
timeouts: SpringCloudBuildPackBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference">SpringCloudBuildPackBindingTimeoutsOutputReference</a>

---

##### `binding_type_input`<sup>Optional</sup> <a name="binding_type_input" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.bindingTypeInput"></a>

```python
binding_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `launch_input`<sup>Optional</sup> <a name="launch_input" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.launchInput"></a>

```python
launch_input: SpringCloudBuildPackBindingLaunch
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `spring_cloud_builder_id_input`<sup>Optional</sup> <a name="spring_cloud_builder_id_input" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.springCloudBuilderIdInput"></a>

```python
spring_cloud_builder_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SpringCloudBuildPackBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts">SpringCloudBuildPackBindingTimeouts</a>]

---

##### `binding_type`<sup>Required</sup> <a name="binding_type" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.bindingType"></a>

```python
binding_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `spring_cloud_builder_id`<sup>Required</sup> <a name="spring_cloud_builder_id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.springCloudBuilderId"></a>

```python
spring_cloud_builder_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudBuildPackBindingConfig <a name="SpringCloudBuildPackBindingConfig" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_build_pack_binding

springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  spring_cloud_builder_id: str,
  binding_type: str = None,
  id: str = None,
  launch: SpringCloudBuildPackBindingLaunch = None,
  timeouts: SpringCloudBuildPackBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#name SpringCloudBuildPackBinding#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.springCloudBuilderId">spring_cloud_builder_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#spring_cloud_builder_id SpringCloudBuildPackBinding#spring_cloud_builder_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.bindingType">binding_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#binding_type SpringCloudBuildPackBinding#binding_type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#id SpringCloudBuildPackBinding#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.launch">launch</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a></code> | launch block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts">SpringCloudBuildPackBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#name SpringCloudBuildPackBinding#name}.

---

##### `spring_cloud_builder_id`<sup>Required</sup> <a name="spring_cloud_builder_id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.springCloudBuilderId"></a>

```python
spring_cloud_builder_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#spring_cloud_builder_id SpringCloudBuildPackBinding#spring_cloud_builder_id}.

---

##### `binding_type`<sup>Optional</sup> <a name="binding_type" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.bindingType"></a>

```python
binding_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#binding_type SpringCloudBuildPackBinding#binding_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#id SpringCloudBuildPackBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launch`<sup>Optional</sup> <a name="launch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.launch"></a>

```python
launch: SpringCloudBuildPackBindingLaunch
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a>

launch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#launch SpringCloudBuildPackBinding#launch}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.timeouts"></a>

```python
timeouts: SpringCloudBuildPackBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts">SpringCloudBuildPackBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#timeouts SpringCloudBuildPackBinding#timeouts}

---

### SpringCloudBuildPackBindingLaunch <a name="SpringCloudBuildPackBindingLaunch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_build_pack_binding

springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch(
  properties: typing.Mapping[str] = None,
  secrets: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#properties SpringCloudBuildPackBinding#properties}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.property.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#secrets SpringCloudBuildPackBinding#secrets}. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#properties SpringCloudBuildPackBinding#properties}.

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.property.secrets"></a>

```python
secrets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#secrets SpringCloudBuildPackBinding#secrets}.

---

### SpringCloudBuildPackBindingTimeouts <a name="SpringCloudBuildPackBindingTimeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_build_pack_binding

springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#create SpringCloudBuildPackBinding#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#delete SpringCloudBuildPackBinding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#read SpringCloudBuildPackBinding#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#update SpringCloudBuildPackBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#create SpringCloudBuildPackBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#delete SpringCloudBuildPackBinding#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#read SpringCloudBuildPackBinding#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_build_pack_binding#update SpringCloudBuildPackBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudBuildPackBindingLaunchOutputReference <a name="SpringCloudBuildPackBindingLaunchOutputReference" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_build_pack_binding

springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resetSecrets">reset_secrets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_secrets` <a name="reset_secrets" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resetSecrets"></a>

```python
def reset_secrets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.secretsInput">secrets_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.secretsInput"></a>

```python
secrets_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.secrets"></a>

```python
secrets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudBuildPackBindingLaunch
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a>

---


### SpringCloudBuildPackBindingTimeoutsOutputReference <a name="SpringCloudBuildPackBindingTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_build_pack_binding

springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts">SpringCloudBuildPackBindingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudBuildPackBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts">SpringCloudBuildPackBindingTimeouts</a>]

---



