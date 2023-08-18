# `azurerm_container_registry_scope_map`

Refer to the Terraform Registory for docs: [`azurerm_container_registry_scope_map`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map).

# `containerRegistryScopeMap` Submodule <a name="`containerRegistryScopeMap` Submodule" id="@cdktf/provider-azurerm.containerRegistryScopeMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryScopeMap <a name="ContainerRegistryScopeMap" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map azurerm_container_registry_scope_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_scope_map

containerRegistryScopeMap.ContainerRegistryScopeMap(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  actions: typing.List[str],
  container_registry_name: str,
  name: str,
  resource_group_name: str,
  description: str = None,
  id: str = None,
  timeouts: ContainerRegistryScopeMapTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.actions">actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#actions ContainerRegistryScopeMap#actions}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.containerRegistryName">container_registry_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#container_registry_name ContainerRegistryScopeMap#container_registry_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#name ContainerRegistryScopeMap#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#resource_group_name ContainerRegistryScopeMap#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#description ContainerRegistryScopeMap#description}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#id ContainerRegistryScopeMap#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.actions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#actions ContainerRegistryScopeMap#actions}.

---

##### `container_registry_name`<sup>Required</sup> <a name="container_registry_name" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.containerRegistryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#container_registry_name ContainerRegistryScopeMap#container_registry_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#name ContainerRegistryScopeMap#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#resource_group_name ContainerRegistryScopeMap#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#description ContainerRegistryScopeMap#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#id ContainerRegistryScopeMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#timeouts ContainerRegistryScopeMap#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#create ContainerRegistryScopeMap#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#delete ContainerRegistryScopeMap#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#read ContainerRegistryScopeMap#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#update ContainerRegistryScopeMap#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_scope_map

containerRegistryScopeMap.ContainerRegistryScopeMap.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_scope_map

containerRegistryScopeMap.ContainerRegistryScopeMap.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_scope_map

containerRegistryScopeMap.ContainerRegistryScopeMap.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference">ContainerRegistryScopeMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.containerRegistryNameInput">container_registry_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.containerRegistryName">container_registry_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.timeouts"></a>

```python
timeouts: ContainerRegistryScopeMapTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference">ContainerRegistryScopeMapTimeoutsOutputReference</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_registry_name_input`<sup>Optional</sup> <a name="container_registry_name_input" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.containerRegistryNameInput"></a>

```python
container_registry_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerRegistryScopeMapTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a>]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_registry_name`<sup>Required</sup> <a name="container_registry_name" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.containerRegistryName"></a>

```python
container_registry_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMap.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryScopeMapConfig <a name="ContainerRegistryScopeMapConfig" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_scope_map

containerRegistryScopeMap.ContainerRegistryScopeMapConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  actions: typing.List[str],
  container_registry_name: str,
  name: str,
  resource_group_name: str,
  description: str = None,
  id: str = None,
  timeouts: ContainerRegistryScopeMapTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.actions">actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#actions ContainerRegistryScopeMap#actions}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.containerRegistryName">container_registry_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#container_registry_name ContainerRegistryScopeMap#container_registry_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#name ContainerRegistryScopeMap#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#resource_group_name ContainerRegistryScopeMap#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#description ContainerRegistryScopeMap#description}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#id ContainerRegistryScopeMap#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#actions ContainerRegistryScopeMap#actions}.

---

##### `container_registry_name`<sup>Required</sup> <a name="container_registry_name" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.containerRegistryName"></a>

```python
container_registry_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#container_registry_name ContainerRegistryScopeMap#container_registry_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#name ContainerRegistryScopeMap#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#resource_group_name ContainerRegistryScopeMap#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#description ContainerRegistryScopeMap#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#id ContainerRegistryScopeMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapConfig.property.timeouts"></a>

```python
timeouts: ContainerRegistryScopeMapTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#timeouts ContainerRegistryScopeMap#timeouts}

---

### ContainerRegistryScopeMapTimeouts <a name="ContainerRegistryScopeMapTimeouts" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_scope_map

containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#create ContainerRegistryScopeMap#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#delete ContainerRegistryScopeMap#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#read ContainerRegistryScopeMap#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#update ContainerRegistryScopeMap#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#create ContainerRegistryScopeMap#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#delete ContainerRegistryScopeMap#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#read ContainerRegistryScopeMap#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/container_registry_scope_map#update ContainerRegistryScopeMap#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryScopeMapTimeoutsOutputReference <a name="ContainerRegistryScopeMapTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_scope_map

containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerRegistryScopeMapTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryScopeMap.ContainerRegistryScopeMapTimeouts">ContainerRegistryScopeMapTimeouts</a>]

---



